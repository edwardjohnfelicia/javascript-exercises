const fibonacci = function(term) {
    let x;
    let k=1;
    let j=0;
    if(Number(term) >= 1) {
        for(let i=0; i<Number(term); i++) {
            x = k + j;
            k=j;
            j=x;
        }
        return x;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;