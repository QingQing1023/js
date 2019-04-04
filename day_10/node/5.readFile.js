var http = require("http");
var fs = require("fs");
http.createServer(function(request,response){
	var dataCon = null;
	//设置cros
	response.setHeader("Access-Control-Allow-Origin","*")
	response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	//读取数据
	fs.readFile("./data.json","utf-8",function(error,data){
	response.write(data);
 	response.end();
	})
}).listen(8010);
