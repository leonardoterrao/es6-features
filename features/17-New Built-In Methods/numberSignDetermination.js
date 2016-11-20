console.log('ES5');

function mathSign(x) {
    return (( x === 0 || isNaN(x)) ? x : (x > 0 ? 1 : -1));
}

console.log(mathSign(7));
console.log(mathSign(0));
console.log(mathSign(-0));
console.log(mathSign(-7));
console.log(mathSign(NaN));


console.log('\nES6');


console.log(Math.sign(7));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-7));
console.log(Math.sign(NaN));
