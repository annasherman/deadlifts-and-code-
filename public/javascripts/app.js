var React = require('react');
var ReactDOM = require('react-dom');
var ExerciseList = require('./allexercises');
var $ = require('jquery');

$(document).ready(function() {
  console.log('sup');
  ReactDOM.render(
    <ExerciseList title='fitness' />,
    document.getElementById('allexercises')
  );

addToWorkout();
changeColor();

});

function addToWorkout(){
  $('.exerciseModuleForm').on('submit', function(e){
    e.preventDefault();
  });
}

function changeColor(){
$('.addToButton').click(function(){
  console.log('click');
  $('.lifts').css('background-color', 'red');
});
}
