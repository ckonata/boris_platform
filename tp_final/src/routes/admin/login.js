const express = require('express');
const router = express.Router();
const userModel = require("../../models/userModel.js");

router.get('/', function(req, res, next) {
  res.render('admin/login', { 
    layout:'admin/layout'
   });
});


router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  })
});

router.post('/', async (req, res, next) => {
 try {
   const user = req.body.name;
   const pw = req.body.password;
   const data = await userModel.getUser(user, pw);

   console.log(data)

   if(data === undefined){
    res.render('admin/login', {layout: '/admin/layout', error: true});
   }else{
    req.session.id = data.id;
    req.session.name = data.name;

    console.log(req.session.id)
    console.log(req.session.name)
    res.redirect('/admin/courses');
   }
  } catch (error) {
   console.log("error login",error);
 }
});

module.exports = router;