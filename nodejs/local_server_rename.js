import { createServer } from 'http';
import { IncomingForm } from 'formidable';
import { rename } from 'fs';

createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/memosk8/Escritorio/' + files.filetoupload.name;
      rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File moved!');
        res.write(fields.toString())
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);