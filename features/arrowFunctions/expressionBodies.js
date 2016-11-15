console.log('ES.5');

var evens = [1, 2, 3, 4, 5];
var odds5 = evens.map(function (v) { return v + 1; });
var pairs5 = evens.map(function (v) { return {even: v, odd: v + 1} } );
var nums5 = evens.map(function (v, i) { return v + i; });
console.log(odds5);
console.log(pairs5);
console.log(nums5);


console.log('\nES.6');

let odds6 = evens.map(v => v + 1);
let pairs6 = evens.map(v => ({ even:v, odd: v+ 1}));
let nums6 = evens.map((v, i) => v + i);
console.log(odds6);
console.log(pairs6);
console.log(nums6);
