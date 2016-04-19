var express = require('express');
var bodyParser = require('body-parser');

var app = express();
module.exports = app;

var handler = require('./requestHandler.js');



/////*****/////*****/////*****/////*****/////*****
// middleware
/////*****/////*****/////*****/////*****/////*****

// use the body parser to recognize json and url data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use express static to set the statically hosted files to the serve from the client directory
app.use('/', express.static(__dirname + '/../dist/'));

/////*****/////*****/////*****/////*****/////*****
// middleware
/////*****/////*****/////*****/////*****/////*****


/////*****/////*****/////*****/////*****
// set request paths below
/////*****/////*****/////*****/////*****

// app.get('/', handler.index.get);

/////*****/////*****/////*****/////*****
// set request paths above
/////*****/////*****/////*****/////*****
