var first = require("./myLib/first");
var existy = require("./myLib/existy");
function cat() {
    var head = first(arguments);
    if(existy(head)){
        return head.concat.apply(head, rest(arguments));
    }else {
        return [];
    }
}