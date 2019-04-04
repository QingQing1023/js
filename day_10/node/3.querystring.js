var querystring = require("querystring");
//querystring 将字符串解析成对象
var str = "name=jack&password=123456";
console.log(querystring.parse(str)); 