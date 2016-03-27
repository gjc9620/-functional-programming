function allOf() {
    var funArr = [].slice.apply(arguments);
    return funArr.reduceRight(function(truth, f){
        return truth && f();
    }, true)
}

function anyOf() {
    var funArr = [].slice.apply(arguments);
    return funArr.reduce(function(truth, f){
        return truth || f();
    }, false)
}

function T() { return true };
function F() { return false };

allOf(T, T, T); //true
allOf(F, F, t); //false
anyOf(T, T, F); //true