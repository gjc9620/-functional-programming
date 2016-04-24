/**
 * Created by gjc on 2016/4/24.
 */
var toArray = require("./myLib/toArray");
var checker = require("./checker");
var validator = require("./validator");

function hasKeys(/*keys*/) {
    var keys = toArray(arguments);
    var fun = function (obj) {
        return keys.every(function (k) {
            return obj[k] !== undefined;
        })
    }
    fun.message = "Must have keys:" + keys.join(","); /*todo 还能更抽象一个函数只验证一个key*/
    return fun
}


// var checkaaaAndBBBB = hasKeys("aaaa", "bbbb");
// var checkObj = validator("must have a object",function (obj) {
//     return Object.prototype.toString.call(obj) === "[object Object]";
// });
//
// var checkerfun  = checker(checkaaaAndBBBB, checkObj);
//
// console.log(checkerfun([]));
// console.log(checkerfun({aaaa:1, bbbb:2}));
// console.log(checkerfun({aaaa:1}));