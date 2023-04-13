var express = require('express');
var router = express.Router();
var coursesModel = require('../../../models/courseModel');

router.get('/', async function(req, res, next) {
 let courses = await coursesModel.getCourses();
 res.render('admin/courses', { 
  layout: 'admin/layout',
  usuario: req.session.name,
 courses});
});

module.exports = router;