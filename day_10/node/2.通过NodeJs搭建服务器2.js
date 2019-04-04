var http = require("http");//引入http模块，通过http模块搭建NodeJs服务器
//通过http模块创建服务器
http.createServer(function(request,response){
	console.log("111");
	//response 响应
	//response.write("111");
	
	//设置字符编码
	response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	response.write("好好学习");
	response.end();
}).listen(8010);