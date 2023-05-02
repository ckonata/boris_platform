const express = require('express');
const router = express.Router();
const courseModel = require('../../models/courseModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);


router.get('/', async function(req, res, next) {
 let courses = await courseModel.getCourses();

 courses = courses.map(course => {
  if(course.image != null){
    const image = cloudinary.url(course.image, 
      { width: 100, 
        height: 150, 
        crop: "fill"
      });
console.log(image)
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
  console.log("req",req)
  console.log("files",req.files)
  if(req.files && Object.keys(req.files).length > 0){
    img_id = (await uploader(req.files.image.tempFilePath)).public_id;
    console.log("img_id",img_id);
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

router.post('/updateCourse', async (req, res, next) => {
 try {
  let course = {
   name: req.body.name,
   description: req.body.description,
   image: req.body.image,
   imageDescription: req.body.imageDescription,
  }
  await courseModel.updateCourse(course, req.body.id);
  res.redirect('/admin/courses');
 } catch (error) {
  res.render('admin/updateCourse', {
    layout: 'admin/layout',
    error: true,
    message: 'No se modifico el curso'
  })
 }
});

module.exports = router;