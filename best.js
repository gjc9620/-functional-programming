function best(coll, rule){
    return coll.reduce(function(pre, curr){
        return rule(pre, curr)? pre : curr
    })
}

// console.log(best([44,2,4,2,1,333], function (x, y) {
//     return x > y
// }))//333