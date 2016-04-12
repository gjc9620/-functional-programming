function checker() {
  var validators = toArray(argument);
  return function(obj) {
    return validators.reduce(function(errs, check) {
      if(check[obj]){
        return errs
      }else{
        return errs.push(check.message)
      }
    },[])
  }
}
