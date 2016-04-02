function first(arr) {
    if(arr[0]){
        return arr[0]
    }else {
        throw new Error("not first")
    }
}

module.exports = first;