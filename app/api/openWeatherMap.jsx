var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=f1f56368f67bc5a0c4dd5d72bf34fbd7&units=metric";

module.exports = {
	getTemp: function(location){

		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		// We fetch the data with then::
		return axios.get(requestUrl).then(function(response){
			if (response.data.cod && response.data.message){
				throw new Error(response.data.message);
			}else{
				return response.data.main.temp;
			}
		}, function(response){
			throw new Error(response.data.message);
		});

	}
}