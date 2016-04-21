var toArray = require("./myLib/toArray");

function checker() {
  var validators = toArray(arguments);
  return function(obj) {
    // console.log(validators)
    return validators.reduce(function(errs, check) {

      if(check(obj)){
        return errs
      }else{
        errs.push(check.message)
        return errs
      }
    },[]);
  }
}

// var ch  = function (v) {
//   var ee =  v[0] !== 1;
//   console.log(ee)
//
//   return ee
// };
// ch.message = "not 1"
//
// var fu = checker(ch)
// console.log( fu([1,22,3]) )