var checker = require("./checker")
function validator(mess, fun) {
    var f = fun;
    f['message'] = mess;
    return f;
}

module.exports = validator;

// var checkOne =checker(validator("fuck", function (v) {
//     return v[0] != 1
// }));
// console.log(checkOne([1 ,2 ,0]));