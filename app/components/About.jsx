var React = require("react");

// En las funciones que no tienen algún state, se puede utilizar la siguiente sintaxis::

var About = function(props){
	return (
		<div>
      		<h1 className="text-center">About Component</h1>
      		<p>This is a weather application built on React. I have built this 
      		for the The Complete React Wep App Developer Course.</p>
      		<p>
      			Here are some of the tools I used:
      		</p>
      		<ul>
      			<li>
      				<a href="https://facebook.github.io/react" target="_blank">React JS</a> - This was the 
      				JavaScript framework used.
      			</li>
      			<li>
      				<a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used 
      				Open Weather Map to search for weather data by city name.
      			</li>
      		</ul>
      	</div>
    )
};

module.exports = About;
