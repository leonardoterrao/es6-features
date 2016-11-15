console.log('ES5');
function f5(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(f5(1, 2, 'hello', true, 7));


console.log('\nES6');

function f6(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(f6(1, 2, 'hello', true, 7));
