var React = require('react');
var $ = require('jquery');

var Lift = React.createClass({
  render: function() {
    return (


    <div className="workoutModule">
    <p>Lift: {this.props.Name}</p>
    <p>Desc: {this.props.Desc}</p>
    <p>Sets: <textarea placeholder="5" /></p>
    <p>Reps: <textarea placeholder="5" /></p>
    <p>Weight: <textarea /></p>
    <p>Rest: <textarea placeholder="90s" /></p>
    </div>
    )
  }
});


//initialize, get your data in component did mount, map thru your data array in render
var Workout = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function(){
    console.log('made it to component did mount');
    //what happens when the component is attached to the dom
    $.ajax({
      url: '/workoutapi',
      type: 'get',
      success: function(data){
        console.log('the ajax call worked');
        console.log(data);
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.log('error!');
        console.log(status);
        //console.log(err);
      }.bind(this)
    });
  },
  render: function(){
    console.log('-----data-------')
    //console.log(this.props);
    console.log(this.state.data);
    var workoutList = this.state.data.map(function(lift){
      return (
      <Lift Name={lift.Name} Desc={lift.Description} />
      );
    });
    if (this.state.data.length === 0){
      workoutList = <div><h3>You havent added any lifts yet!</h3>
      <p>Try taking a peek at our <a href="/exercises">exercise database</a></p></div>
    } else {
      var moreLifts = <p><a href="/exercises">Click for MOAR lifts.</a></p>
    };
    return (

        <section>
        <h2><textarea>Your Workout</textarea></h2>
        {workoutList}
        {moreLifts}
        </section>
      )
  }
})

module.exports = Workout;

