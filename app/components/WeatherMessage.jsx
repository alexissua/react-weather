var React = require("react");

var WeatherMessage = function(props){
	return(
      <div>
        <h3 className="text-center">It is {props.temp}º on {props.location}</h3>
      </div>
    )
};

module.exports = WeatherMessage;
