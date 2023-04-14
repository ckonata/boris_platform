require('dotenv').config();

const createError = require('http-errors');
const express = require("express");
const path = require("path");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const helpers = require('handlebars-helpers')();
const session = require('express-session');

const loginRouter = require('./routes/admin/login');
const coursesRouter = require('./routes/admin/courses');
const mainRouter = require('./routes/admin/main')
const indexRouter = require('./routes/index');

const app = express();

//handlebars setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//configuration app settings
app.use(logger('dev'));
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session setup
app.use(session( {
  secret: 'password123',
  resave: false,
  saveUninitialized: true
}))

const secured = async (req, res, next) => {
  try {
     console.log(req.session);
     console.log(req.session.id);
     if (req.session.id) {
       next();
     } else {res.redirect('/admin/login');}
   } catch (error) {console.log(error);}
 };
 

//configuring express-handlebars as hbs
// app.engine('hbs', hbs.create({
//   extname: 'hbs',
//   defaultLayout: 'layout'
// }).engine)
// app.set("view engine", ".hbs");

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/courses', secured, coursesRouter);
app.use('/admin/main', secured, mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;