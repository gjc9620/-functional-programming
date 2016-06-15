
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
    var meth = target[methodName];
		return meth.apply(target, args);
	});
	return this;
};

Lazychain.prototype.forse = function(){
	return this._calls.reduce(thunk=>{
    return thunk(this._target);
	})
};