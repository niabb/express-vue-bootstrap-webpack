'use strict';

const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./cfg/config.json');
const index = require('./routes/index');
const log = require('./lib/logger.js');

const app = express();

log.info('Starting Application!');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


// Basic HTTP authentication can be enabled with config file.
if(config.authentication && config.authentication.enabled) {
  const authenticator = require('./lib/authenticator.js');
  app.use(authenticator(config.authentication.user, config.authentication.pass, config.authentication.realm));
}

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res/*, next*/) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
