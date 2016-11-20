console.log('ES5');

function isSafeInteger(n) {
    return (
        typeof n === 'number'
        && Math.round(n) === n
        && -(Math.pow(2, 53) -1) <= n
        && n <= (Math.pow(2, 53) -1)
    );
}

console.log(isSafeInteger(42));
console.log(isSafeInteger(9007199254740992));


console.log('\nES6');

console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(9007199254740992));
