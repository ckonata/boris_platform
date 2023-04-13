var express = require('express');
var router = express.Router();

var userModel = require("../../../models/userModel.js");

// login
router.get('/', function(req, res, next) {
  res.render('admin/login', { 
    layout:'admin/layout'
   });
});

// logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  })
});

router.post('/', async (req, res, next) => {
 try {
   var user = req.body.name;
   var pw = req.body.password;
   var data = await userModel.getUser(user, pw);

   if(data === undefined) res.render('admin/login', {layout: '/admin/layout', error: true});

   req.session.id = data.id;
   req.session.name = data.name;
   res.redirect('/admin/courses');

 } catch (error) {
   console.log(error);
 }
});

module.exports = router;