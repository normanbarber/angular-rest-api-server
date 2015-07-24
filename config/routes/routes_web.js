module.exports = function(){
	// these are all application routes for webserver
	return [
		{
			// when a request is made to the app root, render index tpl
			method: 'get',
			route: '/',
			render: {
				template: 'index'
			}
		},
		{
			// when a user posts at the login page, call handleLoginRequest() from config/providers/loginProvider.js
			// note: this route is only an example and has not actions in the working demo
			method: 'post',
			route: '/login',
			handler: {
				module: 'loginProvider',
				method: 'handleLoginRequest'
			}
		}
	]
};