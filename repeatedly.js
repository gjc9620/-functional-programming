function repeatedly(time, fun) {
    return new Array(time).fill(1).map(fun)
}

// repeatedly(3, function() {
//     return "aadada"
// })
