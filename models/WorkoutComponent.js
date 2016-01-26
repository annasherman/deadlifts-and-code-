var mongoose = require('mongoose');

var WorkoutComponentSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Muscle: Array,
  Author: String,
  User: Object,
  WorkoutName: String,
  WorkoutID: Number
});

module.exports = mongoose.model('WorkoutComponent', WorkoutComponentSchema);
