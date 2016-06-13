/**
 *
 * Created by gujiacheng on 16/6/13.
 */
var first = require("./myLib/first"),
	rest = require("./myLib/rest");



function summRec(arr, seed){
	if(arr.length === 0){ return seed}
  return summRec( rest(arr), first(arr)+ seed)
}

console.log( summRec([55,66,77,88], 3) );