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
const apiRouter = require('./routes/api');
const cors = require('cors');

const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

//handlebars setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//configuration app settings
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {
  secret: 'password123',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', cors(), apiRouter); 

app.use('/', loginRouter);
app.use('/admin/login', loginRouter);
const secured = async (req, res, next) => {
  try {
     if (req.session.id) {
       next();
     } else {res.redirect('/admin/login');}
   } catch (error) {
    throw error
  }
};
app.use('/admin/courses', secured, coursesRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;