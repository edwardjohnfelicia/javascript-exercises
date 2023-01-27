function removeFromArray(...theArgs) {
    let array = theArgs[0];
    let newArray = [];
    array.forEach((item)=>{
        if (!theArgs.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

//alternative solution from TOP (Advanced)

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;