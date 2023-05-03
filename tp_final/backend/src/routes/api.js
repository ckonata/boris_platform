const express = require('express');
const router = express.Router();
const courseModel = require('../models/courseModel');
const cloudinary = require("cloudinary").v2;
var nodemailer = require('nodemailer');

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


router.post('/contact', async (req, res) => {

 const mail = {
   to: 'claudia.ziemba@gmail.com',
   subject: '<b> Contacto Boris </b>',
   html: `<b> ${req.body.name} </b> se contactó a través de la web de <b>Boris</b>
   <br><b> Asunto</b>: ${req.body.subject} 
   <br><b> Mensaje</b>: ${req.body.comment} 
   <br><b> Mail de contacto: ${req.body.email}`
 }

 const transport = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: process.env.SMTP_PORT,
   auth: {
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS
   }
 });

 await transport.sendMail(mail)

 res.status(201).json({
   error: false,
   message: 'Mensaje enviado'
 });

});

router.post('/contacto', async (req, res) => {
 const mail = {
   to: 'artanescuela@gmail.com',
   subject: '<b> Contacto Artan </b>',
   html: `<b> ${req.body.nombre} </b> se contactó a través de la web de <b>Artan</b>
   <br><b> Mensaje: ${req.body.mensaje} 
   <br><b>Mail de respuesta: ${req.body.email}
   <br><b> Teléfono de contacto </b> ${req.body.telefono}`
 }

 const transport = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: process.env.SMTP_PORT,
   auth: {
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS
   }
 });

 await transport.sendMail(mail)

 res.status(201).json({
   error: false,
   message: 'Mensaje enviado'
 });

});

module.exports = router;