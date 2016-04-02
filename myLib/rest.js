var toArray =require("./toArray");
//except first
function rest(args) {
    var arr = toArray(args);
    if(arr[1]){
        return arrConcatAll(arr.slice(1));
    }else {throw new Error("now second")}
}

function arrConcatAll(arr){
    var newArr = arr.reduce(function(p, c, i, a) {
        return p.concat(c)
    }, []);
    console.log(newArr);
    return newArr
}

module.exports = rest;