const http = require("http");
const SERVER_NAME = process.env.SERVER_NAME || "I havennt name "
http.createServer(function(request, response){

    response.end("<h1>Likes :"+ SERVER_NAME +" </h1>");
}).listen(80);