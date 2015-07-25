Angular REST api (server side)
======================

Demo for rest api to work with an angular frontend.

web server routes are located in config/routes/routes_web.js

rest server routes are found in config/routes/routes_rest.js

app.js is the main entry-point for the app and calls main.js

main.js is the module that starts servers.

This example includes an express web server and a rest server. I will include a socket server and providers in the next repo I push, completing the rest api sending events back and forth to the client.

### Starting the server ( run npm install first )
```javascript
> npm start
```

The client side is not included in this demo. That will come later, but you can still test requests with this. To test that part of the api you will need to install [Advanced REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US) from the Chrome Web Store.
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

After a successful POST, you see the response status code 200, the loading time and the request and response headers.