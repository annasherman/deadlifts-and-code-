var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Workout = require('./workoutBuilder');

$(document).ready(function() {
  console.log('workout-app.js');

  ReactDOM.render(
    <Workout />,
    document.getElementById('workoutBuilder')
  );
$('.addToButton').click(function(){
  console.log('click');
  $('.lifts').css('color', 'red');
});

});

function changeColor(){
$('.addToButton').click(function(){
  console.log('click');
  $('.lifts').css('color', 'red');
});
}
