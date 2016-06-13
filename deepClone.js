/**
 *
 * Created by gujiacheng on 16/6/8.
 */
var existy = require("./myLib/existy"),
    isObject = require("./myLib/isObject");

function deepClone(obj){
	if(!existy(obj) || !isObject(obj)){
		return obj;
	}
	var temp = new obj.constructor();
	for (var key in obj){
		if(obj.hasOwnProperty(key)){
			temp[key] = obj[key]
		}
	}
	return temp;
}

console.log(  deepClone({a:1}) )