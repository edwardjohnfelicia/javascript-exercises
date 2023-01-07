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

//alternative solution from TOP

// const repeatString = function(word, times) {
//     if (times < 0) return 'ERROR';
//     let string = '';
//     for (let i = 0; i < times; i++) {
//       string += word;
//     }
//     return string;
//   };

// Do not edit below this line
module.exports = repeatString;
