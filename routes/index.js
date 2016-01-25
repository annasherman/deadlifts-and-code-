var express = require('express');
var router = express.Router();
var model = require('../models/Exercise');
var liftsChosen = [];

// var request = require('request');
// var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FITNESS YEAH' });
});

router.get('/exercises', function(req,res,next){
  model.find(function(error, exercises){
    if (error) {
      console.log(error);
    };
    res.render('allexercises', { title: 'fitness'});
  });
});

router.get('/exercises/api', function(req, res) {
  model.find(function(error, exercises){
    if (error) {
      console.log(error);
    };
    res.json(exercises);
  });
});


router.post('/workout', function(req, res, next) {
  console.log(req.body);
  var liftId = req.body.id;
  var liftName = req.body.name;
  var liftAuthor = req.body.user;
  var liftDesc = req.body.desc;
  model.find(function(error, lifts){
    if (error) console.log(error);
    liftsChosen.push({id: liftId, name: liftName, user: liftAuthor, desc: liftDesc});
  });
});

router.get('/workout', function(req, res, next) {
  console.log(liftsChosen);
  //res.json(liftsChosen);
  res.render('workout', {data: liftsChosen});
});

router.get('/workout/api', function(req, res) {
  res.json(liftsChosen);
});


module.exports = router;
