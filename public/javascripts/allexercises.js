var React = require('react');
var $ = require('jquery');

//template
var Exercise = React.createClass({
  render: function() {
      return (
          <form action="/workout" method="post">
            <div className="lifts"><p className="liftName">Lift: <strong>{this.props.Name}</strong></p>
            <p className="userName">Author: <strong>{this.props.User}</strong></p>
            <p className="liftDesc">Equipment: <strong>{this.props.Desc}</strong></p>
            <input type="hidden" name="id" value={this.props.Id}></input>
            <input type="hidden" name="user" value={this.props.User}></input>
            <input type="hidden" name="desc" value={this.props.Desc}></input>
            <input type="hidden" name="name" value={this.props.Name}></input>
            <button type="submit" className="addToButton">Add to Workout</button>
            </div>
          </form>

      );
  }
});

//initialize, get your data in component did mount, map thru your data array in render
var ExerciseList = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function(){
    console.log('made it to component did mount');
    //what happens when the component is attached to the dom
    $.ajax({
      url: '/api',
      dataType: 'json',
      success: function(data){
        console.log('the ajax call worked');
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
    var exerciseNodes = this.state.data.map(function(lift){
      return (
      <Exercise Name={lift.Name} Desc={lift.Description} User={lift.User} Id={lift._id} />
      );
    });
    return (
        <section>{exerciseNodes}</section>
      );
  }
})

module.exports = ExerciseList;

