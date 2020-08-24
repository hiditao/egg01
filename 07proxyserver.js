let http = require("http");
// let XMLHttpRequest = require("xmlhttprequest");


http.createServer((req, res) => {
    console.log("server...")
    
    // let xhr = new XMLHttpRequest();
    // xhr.open("get", "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.9.0.0&channel=ppzs&operator=0&method=baidu.ting.billboard.billCategory&format=json&kflag=2");
    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.responseText);
    //     }
    // }
    // xhr.send();

    // res.end("ok");

}).listen(9999);