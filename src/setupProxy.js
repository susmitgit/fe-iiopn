const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(
		proxy('/api/v1/users', {
			target: 'https://be-iiopn.herokuapp.com/',
			changeOrigin: true
		})
	);
};
