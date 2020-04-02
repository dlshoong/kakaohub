var https = require('https');
 
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host : 'kauth.kakao.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/oauth/token?grant_type=authorization_code&client_id=b4bae52f31781e2c403c049bc2007903&redirect_uri=http://google.com/oauth/kakao&code=eRNiVPtg9IAOLu7Z64eCJxtZPYWk6rjfwXDCsHkJDHMVuOZpNLwE5NhS3OAD_9qcbYxwVgopcFAAAAFxOm8WOQ', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 
    res.on('data', function(d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });
 
});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});

/*
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.get('/', function(request, response) {
  response.send('Hello World!')
  
})
*/


/*
const https = require('https');

https.get('https://kauth.kakao.com/oauth/authorize?client_id=b4bae52f31781e2c403c049bc2007903&redirect_uri=http://google.com/oauth/kakao&response_type=code&scope=friends,talk_message,profile', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
*/