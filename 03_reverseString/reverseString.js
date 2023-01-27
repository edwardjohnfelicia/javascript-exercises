const reverseString = function(str) {
    let reversedString = "";
    for (let i=0; i<=(str.length-1); i++) {
        reversedString += str.charAt(str.length-(1+i))
    }
    return reversedString;
};

//alternative solution from TOP

// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };
   
//    module.exports = reverseString;

// Do not edit below this line
module.exports = reverseString;
