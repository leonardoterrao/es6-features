console.log('ES5');

var isNaN = function (n) {
    return n !== n;
};
var isFinite = function (v) {
    return (typeof v === 'number' && !isNaN(v) && v !== Infinity && v !== -Infinity);
};

console.log(isNaN(42));
console.log(isNaN(NaN));

console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(123));


console.log('\nES6');

console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(123));
