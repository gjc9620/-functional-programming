var toArray =require("./toArray");
//except first
function rest(args) {
    var arr = toArray(args);
    if(arr[1]){
        return arrConcatAll(arr.slice(1));
    }else {return []}
}

function arrConcatAll(arr){
    var newArr = arr.reduce(function(p, c, i, a) {
        return p.concat(c)
    }, []);
    return newArr
}

module.exports = rest;