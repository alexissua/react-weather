var React = require("react");

var WeatherMessage = function(props){
	return(
      <div>
        <p>Its {props.temp} on {props.location}</p>
      </div>
    )
};

module.exports = WeatherMessage;
