const repeatString = function(string, i) {
    if (i>=0) {
        let repeatedString = "";
        while (i>0) {
            repeatedString += string;
            i--;
        }
        return repeatedString;
    } else {
        return 'ERROR'
    }
    

};

// Do not edit below this line
module.exports = repeatString;
