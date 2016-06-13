/**
 * Created by gujiacheng on 16/6/13.
 */
function summRec(arr){
	if(arr.length === 1){ return arr[0]}
  return arr[0] + summRec(arr.shift() && arr)
}

console.log( summRec([55,66,77,88]) );