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
			if(ps.length){
				return truth
			}else {
				return everything(args, first(ps)) && everything(rest(ps), truth);
			}
		}
		return everything(preds, true)
	}
}