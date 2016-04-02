var existy = function(x) { return x!=null };

//existy(undefined);//false
//existy(null); //false
//existy({}.notHere); //false
//existy(0) //true
//existy((function(){})()) //false

module.exports = existy;