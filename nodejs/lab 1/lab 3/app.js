//Bước 1: Khai báo http module(chạy web)
const http = require("http");
//Note: muốn deploy lên hosting (Heroku) thì cần phải set port với process.env.PORT
//Bước 2: Khai báo port của web server
/*
 Note: muốn deploy lên hosting (Heroku)
 thì cần phảo set port với process.env.PORT*/

const port = process.env.PORT || 3000;

//Bước 3: Tạo web server, set header + code, thêm nội dung cho web
//request: client => server
//response: server => client
const app = http.createServer((request, response) => {
    response.statusCode = 200; //HTTP_OK
    response.setHeader("Conten-Type", "text/html");
    response.end("Hello everyone. I had deployed NodeJS to Heroku succesed !")

});

//bước 4: chạy web bằng cách listen port
app.listen(port, () => {
    console.log("Server is listening at http://localhost: " + port);
});