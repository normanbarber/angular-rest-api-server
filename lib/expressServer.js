'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routesweb = require('../config/routes/routes_web');
var routeloaderweb = require('./routeLoaderWeb');

module.exports = function ExpressServer() {
	var app = express();
	var server;
	var port;
	return {
		configure : function(config) {
			port = config.servers.express.port || process.env.PORT || 3456;
			app.set('views', path.join(__dirname, '..', '/public/views'));
			app.set('view engine', 'jade');
			app.use(bodyParser.json());
			app.use(express.static(path.join(__dirname, '..', 'public')));
			routeloaderweb.register({
				app: app,
				routes: routesweb()
			});
		},
		start : function() {
			server = app.listen(port, function(){
				console.log('Express server listening on port ' + port + ' in ' + app.settings.env + ' mode');
			});
		},
		stop : function() {
			server.close(function() {
				console.log('Express server stopping');
			});
		}
	}
};