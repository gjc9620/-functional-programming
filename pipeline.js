/**
 *
 * Created by gujiacheng on 16/6/16.
 */

var first = require("./myLib/first"),
	rest = require("./myLib/rest");

function pipeline(seed /*, arg*/){
	return rest(arguments).reduce((v,fun)=>fun(v), seed)
}

function fifth(a){
	return pipeline(
			a,
			rest,
			rest,
			rest,
			rest,
			first
	)
}

function negativeFifth(a){
	return pipeline(
			a,
			fifth,
			v=>-v
	)
}

console.log(fifth([1,2,3,4,5,6,7]));
console.log(negativeFifth([1,2,3,4,5,6,7]));

console.log(pipeline(42, v=>v*2, v=>v+3));