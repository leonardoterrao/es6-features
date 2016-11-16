function f(x, y, ...a) {
    return (x + y) * a.length;
}

console.log('ES5');
var params5 = ['hello', true, 7 ];
var other5 = [1, 2].concat(params5);
console.log(f.apply(undefined, [ 1, 2 ].concat(params5)));

var str5 = 'foo';
console.log(str5.split(""));


console.log('\nES6');
var params6 = ['hello', true, 7];
var other6 = [1, 2, ...params6];
console.log(f(1, 2, ...params6));

var str6 = 'foo';
console.log([...str6]);