var fs = require("fs");
var obj = {"name":"jack","age":20}
fs.writeFile("a.json",JSON.stringify(obj),function(error){
	if(error){
		console.log("文件写入失败");
	}else{
		console.log("文件写入成功");
	}
})
