var express = require('express');
var router = express.Router();
var model = require('../models/Exercise');
//need to modify this variable based on who is logged in.
var liftsChosen = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user){
    res.render('index', {title: 'Fitness', currentUser: req.user.username})
  } else {
  res.render('index', { title: 'FITNESS'})
  };
});

router.get('/exercises', function(req,res,next){
  model.find(function(error, exercises){
    if (error) {
      console.log(error);
    };
    if (req.user){
      console.log(req.user);
      res.render('allexercises', {title: 'fitness', currentUser: req.user})
    } else {
      res.render('allexercises', {title: 'fitness'});
    }
  });
});

// router.get('/exercises/api', function(req, res) {
//   model.find(function(error, exercises){
//     if (error) {
//       console.log(error);
//     };
//     res.json(exercises);
//   });
// });


router.post('/workout', function(req, res, next) {
  console.log(req.body);
  console.log(req.user);
  //model.save
  var liftId = req.body.id;
  var liftName = req.body.name;
  var liftAuthor = req.body.user;
  var liftDesc = req.body.desc;
  var user = req.user._id;
  if (req.user) {
    model.find(function(error, lifts){
      if (error) console.log(error);
      liftsChosen.push({id: liftId, name: liftName, author: liftAuthor, desc: liftDesc, user: user});
    });
  };
});

router.get('/workout', function(req, res, next) {
  console.log(liftsChosen.length);
  console.log('-------user-------')
  console.log(req.user);
  if (req.user && liftsChosen.length > 0){
    //for (var lift in liftsChosen) {
      //if (liftsChosen[lift].user == req.user._id) {
        res.render('workout', {data: liftsChosen, currentUser: req.user.username, currentUserId: req.user._id});
      //}
    //}
  } else if (req.user) {
    res.render('workout', {data: liftsChosen, currentUser: req.user});
  };
});

// router.get('/workout/api', function(req, res) {
//   res.json(liftsChosen);
// });

// router.post('/workout/api', function(req, res, next) {
//   model.create(req.body, function(error, exercise){
//     if (error) console.log(error);
//     res.json(exercise);
//   });
// });


module.exports = router;
