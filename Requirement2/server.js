var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./mysql/routes/index');
var usersRouter = require('./mysql/routes/user');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
/*
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
var userModel       = require('./mysql/models').user;
require('dotenv').config();
const mysqlHelper = require("./common/mysqlHelper")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.set("port", port);

const routes = require("./routes/routes")
app.use("/api",routes)

app.post('/adduser',(req,res)=>{
  //it will addd data to emp table
  userModel.create(req.body)
  .then(function(data){
      res.json({da:data});
  }).catch(function(error){
      res.json({er:error});
  })
});


app.listen(port, () => {
  mysqlHelper.init();
  console.log(`Example app listening on port ${port}`)
})
*/