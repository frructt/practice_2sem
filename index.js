// const http = require("http");
// const fs = require("fs");
 
// http.createServer(function(request, response){
     
//     console.log(`Запрошенный адрес: ${request.url}`);
//     if(request.url.startsWith("/")){
         
//         // получаем путь после слеша
//         const filePath = request.url.substr(1);
//         fs.readFile(filePath, function(error, data){
                 
//             if(error){
//                 response.statusCode = 404;
//                 response.end("Resourse not found!");
//             }   
//             else{
//                 response.setHeader("Content-Type", "text/html");
//                 response.end(data);
//             }
//         })
//     }
//     else if (request.url.startsWith("/student")) {
//         const filePath = request.url.substr(1);
//         fs.readFile(filePath, function(error, data){
                 
//             if(error){
//                 response.statusCode = 404;
//                 response.end("Resourse not found!");
//             }   
//             else{
//                 response.setHeader("Content-Type", "text/html");
//                 response.end(data);
//             }
//         })
//     }
//     else if (request.url.startsWith("/student/matan_1sem")) {
//         const filePath = request.url.substr(1);
//         fs.readFile(filePath, function(error, data){
                 
//             if(error){
//                 response.statusCode = 404;
//                 response.end("Resourse not found!");
//             }   
//             else{
//                 response.setHeader("Content-Type", "text/html");
//                 response.end(data);
//             }
//         })
//     }
//     else if (request.url.startsWith("student/linal_1sem")) {
//         const filePath = request.url.substr(1);
//         fs.readFile(filePath, function(error, data){
                 
//             if(error){
//                 response.statusCode = 404;
//                 response.end("Resourse not found!");
//             }   
//             else{
//                 response.setHeader("Content-Type", "text/html");
//                 response.end(data);
//             }
//         })
//     }
//     else {
//         // во всех остальных случаях отправляем строку hello world!
//         response.end("Hello World!");
//     }
// }).listen(3000);

var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
    
}).listen(8080);