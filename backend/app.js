var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs');
const pathModule = require('path');

mongoose.connect('mongodb://localhost:27017/plan-smart')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.log('❌ MongoDB connection error:', err));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(pathModule.join(__dirname, 'public')));

const routesPath = pathModule.join(__dirname, 'routes');
fs.readdirSync(routesPath).forEach(file => {
  if (file.endsWith('.js')) {
    const route = require(`./routes/${file}`);
    const routeName = file === 'index.js' ? '/' : `/${file.replace('.js', '')}`;
    console.log(`📌 Registering route: ${routeName}`);
    app.use(routeName, route);
  }
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, _next) {
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
