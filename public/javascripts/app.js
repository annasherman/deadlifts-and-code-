var React = require('react');
var ReactDOM = require('react-dom');
var ExerciseList = require('./allexercises')
var $ = require('jquery');
var Workout = require('./workoutBuilder')

$(document).ready(function() {
  console.log('sup');
  ReactDOM.render(
    <ExerciseList title='fitness' />,
    document.getElementById('allexercises')
  );

  ReactDOM.render(
    <Workout />,
    document.getElementById('workoutBuilder')
  );

});
