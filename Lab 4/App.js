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
    res.writeHead(200, { 'Content-Type': 'text/html' });
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
app.get('', (req, res) => {
  res.send('Lab-4  By Debora Arzu')
})
app.listen(3000, () => {
  console.log("Running in http://localhost:3000")
})

var inputl = require('readline');
var interface = inputl.createInterface({
  input: process.stdin,
  output: process.stdout
});
interface.question('Ingrese una cadena :', function (line) {
  var ParentisisOpen = 0;
  var ParentisisClose = 0;
  var LlaveOpen = 0;
  var LlaveClose = 0;
  var CorcheteOpen = 0;
  var CorcheteClose = 0;

  for (var i = 0; line.lenght; i++) {
    if (line[i] == "(") {
      ParentisisOpen += 1;
      console.log("Numero de parentesis que abren: " + ParentisisOpen);
    }
    if (line[i] == ")") {
      ParentisisClose += 1;
      console.log("Numero de parentesis que cierran: " + ParentisisClose);
    }
    if (line[i] == "[") {
      LlaveOpen += 1;
      console.log("Numero de llaves que abren: " + LlaveOpen);
    }
    if (line[i] == "]") {
      LlaveClose += 1;
      console.log("Numero de llaves que abren: " + LlaveClose);
    }
    if (line[i] == "{") {
      CorcheteOpen += 1;
      console.log("Numero de llaves que abren: " + CorcheteOpen);
    }
    if (line[i] == "]") {
      CorcheteClose += 1;
      console.log("Numero de llaves que abren: " + CorcheteClose);
    }
    if (i == line.lenght) {
      break;
    }
  }

  if (CorcheteOpen == CorcheteClose && LlaveOpen == LlaveClose && ParentisisOpen == ParentisisClose) {
    console.log("Cadena Correcta");
  }
  else {
    console.log("Cadena Incorrecta");
  }

  interface.close();
});
