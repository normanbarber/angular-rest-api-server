'use strict';

var express = require('express');
var config = require('config');
var path = require('path');
var bodyParser = require('restify').bodyParser({mapParams: false});
var routesrest = require('../config/routes/routes_rest');
var routeloaderrest = require('./routeLoaderRest');
var cors = require('cors');
var _ = require('lodash-node');

module.exports = function RestServer() {

	var app = express();
	var server;
	var host;
	var port;

	function setRequestHeader() {
		return function(request, response, next) {
			request.getContentLength = function() {
				if (this._contentLength !== undefined)
					return (this._contentLength === false ? undefined : this._contentLength);

				var length = this.header('content-length');
				if (!length) {
					this._contentLength = false;
				} else {
					this._contentLength = parseInt(length, 10);
				}

				return (this._contentLength === false ? undefined : this._contentLength);
			};

			request.contentLength = request.getContentLength;

			request.getContentType = function() {
				if (this._contentType !== undefined)
					return (this._contentType);

				var index;
				var type = this.header('content-type');

				if (!type) {
					this._contentType = 'application/octet-stream';
				} else {
					if ((index = type.indexOf(';')) === -1) {
						this._contentType = type;
					} else {
						this._contentType = type.substring(0, index);
					}
				}
				return (this._contentType);
			};

			request.contentType = request.getContentType;
			return next && next();
		}
	}

	return {
		configure :  function(options) {
			console.log('Configuring REST server');
			options = options || {};
			port = options.rest_port || 3003;
			host = config.host || 'localhost';
			app.set('title', options.appName || 'My Communication Application');
			app.use(setRequestHeader());
			app.use(bodyParser[0]);
			app.use(bodyParser[1]);
			app.use(express.query());
			app.use(cors());
			routeloaderrest.register({
				app: app,
				routes: routesrest
			});
		},
		start : function() {
			console.log('REST server listening on port ' + port);
			server = app.listen(port);
		},
		stop : function() {
			server.close(function() {
				console.log('REST server stopping');
			});
		}
	}

};