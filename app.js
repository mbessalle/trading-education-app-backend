require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsMiddleWare = require('cors');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');
const tradesRouter = require('./routes/trades');
const authRouter = require('./routes/auth');
const dataRouter = require('./routes/data');
// const usercourseRouter = require('./routes/userCourses');


const app = express();

// view engine setup.
app.set('views', path.join(__dirname, 'views'));

app.use(corsMiddleWare());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/users', usersRouter);
app.use('/tradeData', tradesRouter);
app.use('/auth', authRouter);
app.use('/data', dataRouter);
// app.use('/usercourse', usercourseRouter)

app.get('/', (req, res)=>res.json({message:'Hello'}))

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
  res.send('error');
});


app.listen(process.env.PORT || 4000);
module.exports = app;
