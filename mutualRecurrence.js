/**
 *
 * Created by gujiacheng on 16/6/8.
 */
function evenSteven(n){
  if(n===0){
	  return true
  }
	else {
	  return oaddJohn(Math.abs(n)-1)
  }
}

function oaddJohn(n){
	if(n===0){
		return false
	}else {
		return evenSteven(Math.abs(n)-1);
	}
}

console.log(evenSteven(4), oaddJohn(4));