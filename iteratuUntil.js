function iterateUntil(fun, check, init) {
  var ret = [];
  var result = fun(init);
  
  while(check(result)){
    ret.push(result);
    result = fun(result)
  }
  return ret;
}


iterateUntil(function (n){ return n+n }, function(n){ return n<= 1024 }, 1)
