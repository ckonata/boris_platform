const express = require('express');
const router = express.Router();
const courseModel = require('../models/courseModel');
const cloudinary = require("cloudinary").v2;

router.get('/courses', async function(req, res, next) {  
  let courses = await courseModel.getCourses();
  courses = courses.map(course =>{
   if(course.image){
    const cloud = cloudinary.url(course.image, {
     width: 960,
     height: 500,
     crop: 'fill'
    });
    course.image = cloud;

    return{
     ...course
    }
   }else{
    return{
     ...course
    }
   }
  })
  res.json(courses);
});

module.exports = router;