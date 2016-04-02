var cat = require("./cat")
var toArray = require("./myLib/toArray");
//console.log(toArray)
function construct(head, tail) {
    return cat([head], toArray(tail))
}

//console.log(construct(42, [1,2,3]));