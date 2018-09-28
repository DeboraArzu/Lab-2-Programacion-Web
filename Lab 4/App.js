const http = require('http');
url = require('url');

//create the http server accepting requests to port 3333
http.createServer(function (req, res) {
    //get url infomation
    var urlParts = url.parse(req.url);
    console.log(req.url, urlParts);
 
    //direct the request to appropriate function to be processed based on the url pathname
    switch(urlParts.pathname) {
        case "/":
            homepage(req, res);
            break;
        case "/hello/:name":
            read(req, res);
            break;
        default:
            homepage(req,res);
            break;
    }
}).listen(3000); 
console.log("Server running at http://localhost:3000/");

//functions to process incoming requests
function homepage(req, res) {
  res.end("Hello, this is the home page :)"); 
}

function read(req, res) {
  res.end("Hello:<name>");    
}