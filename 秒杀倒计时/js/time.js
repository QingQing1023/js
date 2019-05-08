const http = require("http");

const server = http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")

//	const date = new Date();
//	date.setDate(date.getDate() + 7);
	var ster = "2019/5/9 20:26:23";
	res.end(JSON.stringify(new Date(ster).getTime()))
});

server.listen(8000);
