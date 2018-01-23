const { Wit } = require('node-wit');

const client = new Wit({
	accessToken: 'ServerAccessToken'
});

client
	.message('What is the weather in Munich?', {})
	.then(data => {
		//console.log('Where are we checking: ' + data.entities.location[0].value);
		console.log(data.entities.intent);

	})
	.catch(console.error);
