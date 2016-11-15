console.log('ES5');
function f5(x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42
    }
    return x + y + z;
}
console.log(f5(1));
console.log(f5(5, 5));
console.log(f5(5, 5, 7));


console.log('\nES6');
function f6(x, y = 7, z = 42) {
    return x + y + z;
}
console.log(f6(1));
console.log(f6(5, 5));
console.log(f6(5, 5, 7));