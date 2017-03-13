// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('data', function (data) {
         //console.log('Getting data...');
       })
       .on('end', function () {
         console.log('Downloading image...');
       })
       .on('response', function (response) {
         console.log('Response Status Code:', response.statusCode);
         console.log('Content type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function() {
         console.log('Download complete!');
       });
