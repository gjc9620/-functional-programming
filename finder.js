  function finder(valefun, bestFun, coll) {
    return coll.reduce(function(pre, curr) {
	  var bestVal = valefun(pre);
	  var currentVal = valefun(curr);
	  return (bestVal === bestFun(currentVal, bestVal)? pre : curr) 
	})
  };
  
  // var a = finder(function(a){ return a}, Math.max, [1,2,66,4,5])
  // console.log(a);
