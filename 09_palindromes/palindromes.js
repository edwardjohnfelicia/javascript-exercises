const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi,"").toLowerCase();
    // return str;
    let reversedString = "";
    for (let i=0; i<=(str.length-1); i++) {
        reversedString += str.charAt(str.length-(1+i))
    }
    return str == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
