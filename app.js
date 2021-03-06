var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const morgan = require('morgan');

var SinhvienList = require('./routes/SinhvienList');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/web', SinhvienList);
app.use('/api', SinhvienList);
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
