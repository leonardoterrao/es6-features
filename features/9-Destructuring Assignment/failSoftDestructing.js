console.log('ES5');

var list5 = [ 7, 42 ];
var a5 = typeof list5[0] !== 'undefined' ? list5[0] : 1;
var b5 = typeof list5[1] !== 'undefined' ? list5[1] : 2;
var c5 = typeof list5[2] !== 'undefined' ? list5[2] : 3;
var d5 = typeof list5[3] !== 'undefined' ? list5[3] : undefined;

console.log(a5, b5, c5, d5);


console.log('\nES6');

let list6 = [ 7, 42 ];
let [ a6 = 1, b6 = 2, c6 = 3, d6 ] = list6;
console.log(a6, b6, c6, d6);