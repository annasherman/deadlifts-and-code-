var express = require('express');
var router = express.Router();
var model = require('../models/Exercise');

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
    res.render('index', { title: 'fitness'});
  });
});

router.post('/workout', function(req, res, next) {
  console.log(req.body);
  var liftId = req.body.id;
  model.find(function(error, lifts){
    if (error) console.log(error);
    var currentLifts = [];
    for (var lift in lifts) {
      if (lifts[lift]._id == liftId) {
        currentLifts.push(lifts[lift]);
      }
    }
    res.render('index');
  });
});

router.get('/workout', function(req, res, next) {
  res.render('index');
});

//cheerio code before the web scraping idea was abandoned
// router.get('/exercises', function(req,res){
//   request('https://wger.de/en/exercise/overview/', function(err,res,body){
//     if(!err && res.statusCode == 200){
//       console.log('ok');
//       var $ = cheerio.load(body);
//       $() //selector goes here
//     } else {
//       console.log(err);
//     }
//   });
// });


module.exports = router;
