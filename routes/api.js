var express = require('express');
var router = express.Router();
var model = require('../models/Exercise');

//get all exercises
router.get('/', function(req, res, next) {
  model.find(function(error, exercises){
    if (error) console.log(error);
    res.json(exercises);
  })
});

//get exercise by ID
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id,function(error, exercise){
    if (error) console.log(error);
    res.json(exercise);
  });
});


//create exercise
router.post('/', function(req, res, next) {
  model.create(req.body, function(error, exercise){
    if (error) console.log(error);
    res.json(exercise);
  });
});

//edit exercise
router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, exercise){
    if (error) console.log(error);
    res.json(exercise);
  });
});

router.patch('/:id', function(req, res, next) {
  var dataToSave = {};
  console.log(';)');
  console.log(req.body);
  model.findByIdAndUpdate(req.params.id, req.body, function(error, exercise){
    if (error) console.log(error);
    res.json(exercise);
  });
});

//delete exercise
router.delete('/:id', function(req, res, next){
  model.findByIdAndRemove(req.params.id, req.body, function(error,exercise){
    if(error) console.log(error);
    res.json(exercise);
  });

});

module.exports = router;
