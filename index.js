const { Wit } = require('node-wit');
const request = require('request');

const client = new Wit({
	accessToken: 'ServerAccessToken'
});

client
	.message('What is the weather in Munich?', {})
	.then(data => {
		//console.log('Where are we checking: ' + data.entities.location[0].value);
		console.log(data.entities.intent);
		if(data.entities.intent[0].value === 'weather'){
			if(data.entities.location[0].value) {
				let apiKey = 'OPENWEATHERMAPAPIKEY';
				let city = data.entities.location[0].value;
				let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
				console.log('The weather in ' + city + ' is ');
				request(url, function (err, response, body) {
				  if(err){
				    console.log('error:', error);
				  } else {
						let weather = JSON.parse(body);
				    console.log(weather.weather[0].main);
				  }
				});
			}
		}else {
			console.log('Do not compute');
		}
	})
	.catch(console.error);
