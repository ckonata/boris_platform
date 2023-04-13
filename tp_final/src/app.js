require('dotenv').config();

const express = require("express");
const hbs  = require('express-handlebars');
const path = require("path");
const loginRouter = require('./routes/admin/login/login.js');
const coursesRouter = require('./routes/admin/login/courses.js');
const indexRouter = require('./routes/index');
const helpers = require('handlebars-helpers')();
const session = require('express-session');

const app = express();

app.set("port", process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

//configuring express-handlebars as hbs
app.engine('hbs', hbs.create({
  extname: 'hbs',
  defaultLayout: 'layout'
}).engine)
app.set("view engine", ".hbs");

const secured = async (req, res, next) => {
 try {
    console.log(req.session);
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {res.redirect('/admin/login');}
  } catch (error) {console.log(error);}
};

app.use( "/", indexRouter);
app.use( "/admin/courses", secured, coursesRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));

module.exports = app;