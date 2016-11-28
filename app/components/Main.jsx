var React = require("react");
var Nav = require("./Nav");

var Main = function(props){
	return (
	    <div>
	      <Nav />
	      <div className="row">
	      	<div className="medium-6 large-4 small-centered columns" style={{marginTop: "5%"}}>
	      		{props.children}		
	      	</div>
	      </div>
	    </div>
	  )
};

module.exports = Main;
