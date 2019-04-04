var http = require("http");
var querystring = require("querystring");
var fs = require("fs");
http.createServer(function(request,response){
	//设置跨域
	response.setHeader("Access-Control-Allow-Origin","*");
	//设置响应的字符编码
	response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	var strData = "";
	var info = null;
	request.on("data",function(data){
		strData+=data;
	});
	request.on("end",function(){
		strData = querystring.parse(strData);
		fs.readFile("register.json","utf8",function(error,data){
			var userData = JSON.parse(data);
			if(strData.name == userData.name&&strData.pass == userData.pass){
				info = {"code":0,"success":"登陆成功","token":"Qing"};
				response.write(JSON.stringify(info,null,4));
			}else{
				info = {"code":1,"success":"登陆失败","token":"Qing"};
				response.write(JSON.stringify(info,null,4));
			}
			response.end();
		})
	});
}).listen(8021)
