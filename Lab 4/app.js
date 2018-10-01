const express = require('express')
const app = express()
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write('File uploaded');
        res.end();
      });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(3000); 

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send('Hello' + name)
})
app.get('', (req, res) =>{
  res.send('Lab-4  By Debora Arzu')
})
app.listen(3000, () => {
    console.log("Running in http://localhost:3000")
})

