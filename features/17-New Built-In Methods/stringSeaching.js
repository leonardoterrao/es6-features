console.log('ES5');

console.log("hello".indexOf("ello") === 1);
console.log("hello".indexOf("hell") === (4 - 'hell'.length));
console.log("hello".indexOf("ell") !== -1);
console.log("hello".indexOf("ell", 1) !== -1);
console.log("hello".indexOf("ell", 2) !== -1);


console.log('\nES6');

console.log('hello'.startsWith('ello', 1));
console.log('hello'.endsWith('hell', 4));
console.log('hello'.includes('ello'));
console.log('hello'.includes('ello', 1));
console.log('hello'.includes('ello', 2));
