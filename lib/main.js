'use strict';

var ExpressServer = require('../lib/expressServer');
var RestServer = require('../lib/restServer');

function Main() {

	return {
		start : function(config,root) {
			console.log('Starting Servers for Express, REST and Sockets');

			if(config.servers.express){
				var webserver = new ExpressServer();
				webserver.configure(config);
				webserver.start();
			}
			if(config.servers.REST){
				var restapiserver = new RestServer();
				restapiserver.configure(config);
				restapiserver.start();
			}
		}
	}
}
module.exports = Main;