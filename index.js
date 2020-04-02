var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

const request = require ('request');
const querystring = require ('querystring');

let dataString = 'grant_type = authorization_code'
+ '& client_id = b4bae52f31781e2c403c049bc2007903'
+ '& redirect_uri = http://google.com/oauth/kakao'
+ '& code = SeKvFRI8a_Uiau0Ue1A-Cha4KJS251tGf3QHDJ5OkfV0gmSVDDdq45Xbth83W7G_QBKMjAorDNIAAAFxOi-3qw'

let options = {
url: ' https://kauth.kakao.com/oauth/token',
method: 'POST',
headers: {
Content_Type: 'application / x-www-form-urlencoded'
},
body: dataString
};

function callback (error, response, body) {
console.log (response.statusCode);

if(!error && response.statusCode==200) {
	console.log(body);
} else {
	console.log('error : ' + error);
	console.log('body : ' + body);
}
}




/*
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