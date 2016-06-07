/**
 * Created by gujiacheng on 16/6/7.
 */
var toArray = require("./myLib/toArray");
var first = require("./myLib/first");
var rest = require("./myLib/rest");

function andify(){
	var preds = toArray(arguments);
	return function (){
		var args = toArray(arguments);
		var everything = function(ps, truth){
			console.log(ps);
			if(ps.length===0){
				return truth
			}else {
				return everything(args, first(ps)) && everything(rest(ps), truth);
			}
		};
		return everything(preds, true)
	}
}

var ggg = andify(v=>v===1, v=>v+1===2);
var tt = ggg(1,2,3);
console.log(tt);
//why not work