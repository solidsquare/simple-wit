const { Wit } = require('node-wit');

const client = new Wit({
	accessToken: 'ServerAccessToken'
});

client
	.message('Take me to Ireland', {})
	.then(data => {
		console.log('Looks like we are going to: ' + data.entities.location[0].value);
	})
	.catch(console.error);
