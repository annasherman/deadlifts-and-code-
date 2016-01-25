var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  MuscleGroup: Array,
  User: String
});

module.exports = mongoose.model('Exercise',ExerciseSchema);
