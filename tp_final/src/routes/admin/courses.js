var express = require('express');
var router = express.Router();
var courseModel = require('../../models/courseModel');

router.get('/', async function(req, res, next) {
 let courses = await courseModel.getCourses();
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
  if (req.body.name !="" && req.body.description != "") {
   await courseModel.addCourses(req.body);
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
})

/
module.exports = router;