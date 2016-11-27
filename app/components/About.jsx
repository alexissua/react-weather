var React = require("react");

// En las funciones que no tienen algún state, se puede utilizar la siguiente sintaxis::

var About = function(props){
	return (
		<div>
      		<h3>About Component</h3>
      		<p>Welcome to the About page!</p>
      	</div>
    )
};

module.exports = About;
