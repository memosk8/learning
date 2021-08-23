var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar', { total: 100 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 50);

var ProgressBar = require('progress');
var https = require('https');
 
var req = https.request({
  host: 'download.github.com',
  port: 443,
  path: '/visionmedia-node-jscoverage-0d4608a.zip'
});
 
req.on('response', function(res){
  var len = parseInt(res.headers['content-length'], 10);
 
  console.log();
  var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len
  });
 
  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });
 
  res.on('end', function () {
    console.log('\n');
  });
});
 
req.end();