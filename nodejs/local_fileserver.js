var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var urlParsed = url.parse(req.url, true);
  // req.url has to be parsed otherwise fs.readfile will throw an error
  var filename = "." + urlParsed.pathname;
  console.log(`server running . . . \nreq.url : ${req.url} \nurl.parse(req.url, true).pathname : ${filename}`);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      console.log(err.message);
      res.write(err.message);
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data.toString());
    return res.end();
  });
}).listen(8080);

