var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var locationRouter = require('./routes/location');
var gigRouter = require('./routes/gig');
var spotifyRouter = require('./routes/spotify');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(locationRouter);
app.use(gigRouter);
app.use(spotifyRouter);

module.exports = app;
