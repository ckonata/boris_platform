const express = require('express');
const router = express.Router();
const courseModel = require('../../models/courseModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function(req, res, next) {
 let courses = await courseModel.getCourses();

 courses = courses.map(course => {
  if(course.image != null){
    const image = cloudinary.url(course.image, 
      { width: 100, 
        height: 150, 
        crop: "fill"
      });
    return {
      ...course,
      image
    }
  }else{
    return{
      ...course,
      image: ''
    }
  }
 });

 res.render('admin/courses', { 
  layout: 'admin/layout',
  usuario: req.session.name,
 courses});
});

router.get('/addCourse', (req, res, next) => {
 res.render('admin/addCourse', {
   layout: 'admin/layout'
 })
});

router.post('/addCourse', async (req, res, next) => {
 try {
  let img_id = "";

  if(req.files && Object.keys(req.files).length > 0){
    img_id = (await uploader(req.files.image.tempFilePath)).public_id;
  }
  if (req.body.name !="" && req.body.description != "") {
   await courseModel.addCourses({
    ...req.body,
    image: img_id,
   });
   res.redirect('/admin/courses')
  } else {
   res.render('admin/cursos/addCourse', {
    layout: 'admin/layout',
    error: true,
    message: 'Todos los campos son requeridos'
   });
  }
 }catch (error) {
  res.render('admin/addCourse', {
   layout: 'admin/layout',
   error: true,
   message: 'No se cargó el curso'
  });
 }
})

router.get('/deleteCourse/:id', async (req, res, next) => {
 const id = req.params.id;
 await courseModel.deleteCourse(id);
 res.redirect('/admin/courses')
});

router.get('/updateCourse/:id', async (req, res, next) => {
  let id = req.params.id;
  var course = await courseModel.getCourse(id);
  res.render('admin/updateCourse', {
    layout: 'admin/layout',
    course
  });
});

router.post('/updateCourse', async (req, res, next) => {
 try {
  let img_id = req.body.originalImage;
  let deleteOriginalImage = false;

  if (req.body.deleteImage === "1") {
    img_id = null;
    deleteOriginalImage = true;
  }

  if (req.files && Object.keys(req.files).length > 0) {
    img_id = (await uploader(req.files.image.tempFilePath)).public_id;
    deleteOriginalImage = true;
  }


  if (deleteOriginalImage && req.body.originalImage) {
    await (destroy(req.body.originalImage));
  }

  let course = {
   name: req.body.name,
   description: req.body.description,
   image: img_id,
   imageDescription: req.body.imageDescription,
  }

  await courseModel.updateCourse(course, req.body.id);
  res.redirect('/admin/courses');
 } catch (error) {
  res.render('admin/updateCourse', {
    layout: 'admin/layout',
    error: true,
    message: `No se modifico el curso: ${error}`
  })
 }
});

module.exports = router;