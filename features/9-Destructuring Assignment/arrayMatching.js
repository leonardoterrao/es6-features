console.log('ES5');

var list5 = [ 1, 2, 3 ];
var a5 = list5[0], b5 = list5[2];
var tmp = a5; a5 = b5; b5 = tmp;
console.log(a5);
console.log(b5);
console.log(tmp);

console.log('\nES6');

let list6 = [ 1, 2, 3 ];
let [ a6,  , b6 ] = list6;
[ b6, a6 ] = [ a6, b6 ];
console.log(list6);
console.log([ a6,  , b6 ]);
console.log([ b6, a6 ]);
