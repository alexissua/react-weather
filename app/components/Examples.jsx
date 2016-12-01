var React = require("react");
var {Link} = require("react-router");

var Examples = function(props){
	return (
		<div>
	        <h1 className="text-center page-title">Examples</h1>
	        <p>Here are a few examples location to try out: </p>
	        <ol>
	        	<li>
        			<Link to="/?location=Maturin">Maturin, MO</Link>
	        	</li>
	        	<li>
	        		<Link to="/?location=Panama">Panama, PA</Link>
	        	</li>
	        </ol>
        </div>
      )
};

module.exports = Examples;
