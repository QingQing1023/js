var http = require("http");
var querystring = require("querystring");
var server = http.createServer(function(request,response){
	//创建用户信息池
	var userInfo = [
		{userName : "jack",password : "123456"},
		{userName : "rose",password : "1234567"},
		{userName : "nick",password : "12345678"},
	]
	//设置允许访问的源
	response.setHeader("Access-Control-Allow-Origin","*");
	//通过post方式传递过来的数据来进行接收
	var str = "";
	request.on("data",function(data){
		str+=data;
	});
	request.on("end",function(){
		var s = querystring.parse(str);
		for(var i = 0;i<userInfo.length;i++){
			var json = null;
			if(s.userName == userInfo[i].userName&&s.password == userInfo[i].password){
				json = '{"code":0,"success":"登陆成功","token":"QingQing"}';
			}else{
				json = '{"code":1,"success":"登陆失败"}';
			}
			response.end(json)
		}
	})
});
server.listen(8000);