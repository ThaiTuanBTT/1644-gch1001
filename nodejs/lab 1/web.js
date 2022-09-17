//Khai báo module http để tạo web server
const http = require('http')
    //khai báo server host
    // const host = 'localhost' //127.0.01
    //Khai báo server port
    // const port = 8080
    //Tạo server.
const server = http.createServer((request, respond) => {
        respond.end('Hello everyone. This is my first NodeJS web page')
    }) //chạy server
server.listen(8080)