var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({

	getInitialState: function() {
		// return{
		// 	location: "Miami",
		// 	temp: 88
		// }	

		return{
			isLoading: false
		}
	},
	handleSearch: function(location){
		
		// Hacemos esto para poder utilizar this dentro del Promise::
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		// We call the getTemp and we use then again to update the state with the fetched data or to show the error:
		openWeatherMap.getTemp(location).then(function(temp){

			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});

		}, function(error){
			that.setState({
				isLoading: false,
				errorMessage: error.message
			})
		});

	},  
	componentDidMount: function(){
		// This method fires it when the component has mounted into the browser::

		//This variable contains the value from the url parameter location;
		var locationFromSearch = this.props.location.query.location;
		
		if ((locationFromSearch) && (locationFromSearch.length > 0)){
			this.handleSearch(locationFromSearch);
			window.location.hash = "#/";	
		}
	},
	componentWillReceiveProps: function(newProps) {
		//This variable contains the value from the url parameter location;
		
		var locationFromSearch = newProps.location.query.location;

		if ((locationFromSearch) && (locationFromSearch.length > 0)){
			this.handleSearch(locationFromSearch);
			window.location.hash = "#/";	
		}
	},
	render: function(){

		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if (isLoading){
				return <h3 className="text-center">Fetching weather...</h3>
			}else if(temp && location){
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		function renderError(){

			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage} />
				);
			}
		}

	    return (
	      <div>
	          <h1 className="text-center page-title">Weather App</h1>
	          <WeatherForm onSearch={this.handleSearch} />
	          {renderMessage()}
	          {renderError()}
	      </div>
	    )
	}
});

module.exports = Weather;
