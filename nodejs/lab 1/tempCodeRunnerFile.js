//Khai báo module http để tạo web server
const http = require('http')
    //khai báo server host
const host = 'localhost' //127.0.01
    //Khai báo server port
const port = 3000
    //Tạo server.
const server = http.createServer((request, respond) => {
        respond.end('Hello world')
    }) //chạy server
server.listen(port)