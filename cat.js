var first = require("./myLib/first");
var existy = require("./myLib/existy");
var rest = require("./myLib/rest");
function cat() {
    var head = first(arguments);
    if(existy(head)){
        return head.concat(rest(arguments));
    }else {
        return [];
    }
}

//console.log(cat([1,2,3], [4,5,6], [7,8,9]));

module.exports = cat;