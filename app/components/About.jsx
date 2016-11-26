var React = require("react");

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// En las funciones que no tienen algún state, se puede utilizar la siguiente sintaxis::

var About = function(props){
	return (
      <h3>About Component</h3>
    )
};

module.exports = About;
