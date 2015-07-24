Angular REST api (server side)
======================

Demo for rest api to work with an angular frontend. Configuring web server routes, in config/routes/routes_web.js, to load dynamically in the browser. Rest routes are also configured dynamically and found in config/routes/routes_rest.js

app.js is the main entry-point for the app and calls main.js passing in 2 args for the apps root path and the app's configuration settings. main.js is the module that starts servers.

This example includes an express web server and a rest server. I will include a socket server in another example to demo sending events back and forth to the client.

### Starting the server ( run npm install first )
```javascript
> npm start
```

For this demo, there is no view. That will come next. For now, to test your rest api you will need to install Advanced REST Client from the Chrome Web Store.
### Posting from Advance REST Client (ARC)
```{engine='bash'}
> url: http://localhost:4001/id/someid
> Select POST radio button
> Select application/json from the content-type drop-down menu
> payload: {"somekey":"somevalue"}
> Click Send
```

After posting from ARC, your logs should look something like this in your console. Values may be different depending on your payload and the route id you are posting to.
```{engine='bash'}
Passing data to event bus
Publish event messageReceived: {"source":"REST","method":"POST","url":"/id/someid","data":{"id":"someid","body":{"somekey":"somevalue"},"query":{}}}
```