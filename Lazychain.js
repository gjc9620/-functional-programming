
/**
 * Created by gujiacheng on 16/6/15.
 */
var first = require("./myLib/first"),
	rest = require("./myLib/rest");

function Lazychain(obj){
	this._calls = [];
	this._target = obj
}

Lazychain.prototype.invoke = function(methodName /*, args*/){
  var args = rest(arguments);
	this._calls.push(function(target){
		return target[methodName](...args);
	});
	return this;
};

Lazychain.prototype.forse = function(){
	return this._calls.reduce((value ,thunk)=>{
    return thunk(value);
	},this._target)
};

var l1 = new Lazychain([2,3,1]);
l1.invoke("sort", (a, b)=>b>a )
  .invoke("map", v=>v*2 );
console.log(l1.forse())