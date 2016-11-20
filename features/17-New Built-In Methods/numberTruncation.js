console.log('ES5');

function mathTrunc(x) {
    return (x < 0 ? Math.ceil(x) : Math.floor(x));
}

console.log(mathTrunc(42.7));
console.log(mathTrunc(0.1));
console.log(mathTrunc(-0.1));


console.log('\nES6');

console.log(Math.trunc(42.7));
console.log(Math.trunc(0.1));
console.log(Math.trunc(-0.1));