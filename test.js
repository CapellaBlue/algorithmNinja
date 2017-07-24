Write a function that takes in a string and returns the length of the longest string prefix in which all characters are arranged in alphabetical order.

Note: The string contains only lower case letters from a - z.

var longestPrefix = function(s) {
    var aBet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var splitStr = s.split("");
    console.log(splitStr);
    for(var i = 0; i<splitStr.length; i++){
        for(var j = 0; j<aBet.length; j++){
            if (splitStr[i] == aBet[j]){
                splitStr[i] = j;
                if(splitStr[i] < j-1){
                    return i;
                } else if (splitStr.length - 1 == i){
                   return i + 1;
                }

            }

        }
    }

};

console.log(longestPrefix("knotty"));
