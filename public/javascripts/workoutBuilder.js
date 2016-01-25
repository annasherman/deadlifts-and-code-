var React = require('react');
var $ = require('jquery');

var Workout = React.createClass({
  render: function() {
    return <div>Hello</div>;
  }
});

module.exports = Workout;

// //template
// var Exercise = React.createClass({
//   render: function() {
//       return (
//           <form method="post" action="/workout">
//           <div className="lifts"><p className="liftName"><input name="name">Lift: <strong>{this.props.Name}</strong></input></p>
//           <p className="userName"><input name="user">Author: <strong>{this.props.User}</strong></input></p>
//           <p className="liftDesc"><input name="desc">Equipment: <strong>{this.props.Desc}</strong></input></p>
//           <input type="hidden" name="id">{this.props._id}</input>
//           <button className="addToButton" type="submit">Add to Workout</button>
//           </div>
//           </form>
//       );
//   }
// });

// //initialize, get your data in component did mount, map thru your data array in render
// var Workout = React.createClass({
//   getInitialState: function() {
//     return {data: []}
//   },
//   componentDidMount: function(){
//     console.log('made it to component did mount');
//     //what happens when the component is attached to the dom
//     $.ajax({
//       url: '/api',
//       dataType: 'json',
//       success: function(data){
//         console.log('the ajax call worked');
//         this.setState({data: data})
//       }.bind(this),
//       error: function(xhr, status, err){
//         console.log('error!');
//         console.log(status);
//         //console.log(err);
//       }.bind(this)
//     });
//   },
//   render: function(){
//     console.log('-----data-------')
//     //console.log(this.props);
//     console.log(this.state.data);
//     var exerciseNodes = this.state.data.map(function(lift){
//       return (
//       <Exercise Name={lift.Name} Desc={lift.Description} User={lift.User} />
//       );
//     });
//     return (
//         <section>{exerciseNodes}</section>
//       );
//   }
// })

// module.exports = ExerciseList;

