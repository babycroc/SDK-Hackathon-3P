var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var template = require('./bin/template.js');
var db = require("./lib/mysql");
var cors = require('cors')



var fs = require('fs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())



app.get('/problem',async function(req,res){
  const data = {};
  //make img property
    const img = {};
    const imgNo = template.getImgNo();
    img.imgId = imgNo;
    const imgData = template.getImgData(imgNo);  
  //make choice property
    const choices = {};
    await template.getChoices(choices,imgData);

    

  data.img = img;
  data.choices = choices;

  res.send(data);
});

app.post('/result',function(req,res){
  const scoreSum = req.body.scoreSum;
  const userName = req.body.userName;
  db.query(`INSERT INTO scoreboard (scoreSum,userName) VALUES(?,?)`,[scoreSum,userName],function(err,data){

  })
})

app.get('/scoreboard',function(req,res){
  db.query(`SELECT DISTINCT scoreSum, userName FROM scoreboard`,function(err,rows){
    res.send(rows);
  })
})







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

app.listen(3007, function (req, res) {
});

module.exports = app;
