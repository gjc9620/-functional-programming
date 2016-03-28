//except first
function rest(arr) {
    if(arr[1]){
        return arr.slice(1)
    }else {throw new Error("now second")}
}