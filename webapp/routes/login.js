var express = require('express');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var fs = require('fs');
var stringify = require('json-stringify-safe');
var router = express.Router();

var flash = require('connect-flash');
var passport = require('passport');

router.get('/', function(req, res, next){
  res.render('login', {
    title: 'Login',
    isLoggedIn: false,
    message: req.flash('message'),
  });
});

router.post("/", passport.authenticate('localLogin', {
  successRedirect: '/homepage',
  failureRedirect: '/',
  failureFlash: true
}), function(req, res, info){
  res.render('login', {
    title: 'Login',
    isLoggedIn: false,
    message: req.flash('message'),
  });
});

module.exports = router;