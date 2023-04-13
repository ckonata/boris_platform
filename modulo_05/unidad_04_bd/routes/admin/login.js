var express = require('express');
var router = express.Router();

var userModel = require('../../models/userModel');

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

// login route
router.post('/', async (req, res, next) => {
 try {
   var user = req.body.usuario;
   var pw = req.body.password;
   var data = await userModel.getUser(user, pw);

   if(data === undefined) res.render('admin/login', {layout: 'admin/layout', error: true});

   req.session.id = data.id;
   req.session.nombre = data.usuario;
   res.redirect('/admin/novedades');

 } catch (error) {
   console.log(error);
 }
});

// logout route
router.get('/logout', function (req, res, next) {
 req.session.destroy();
 res.render('admin/login', {
   layout: 'admin/layout'
 })
});

module.exports = router;