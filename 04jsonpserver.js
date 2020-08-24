let http = require("http");

http.createServer((req, res) => {
    let obj = {
        name: "Rose",
        age: 18
    }

    // jsonp跨域处理
    res.write(`jsonp(${JSON.stringify(obj)})`);

    res.end();
}).listen(9999);
console.log("server is runing 9999....")