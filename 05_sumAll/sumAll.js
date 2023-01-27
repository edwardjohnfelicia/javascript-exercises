const sumAll = function(a, b) {
    if(Number(a)!==a||Number(b)!==b) return "ERROR";
    if(a<0||b<0) return "ERROR";

    let first = Math.min(a,b);
    let last = Math.max(a,b);
    let count = 0;

    for (let i=first; i<=last;i++){
        count = count + i;
    } 
    return count;
};

// Do not edit below this line

module.exports = sumAll;