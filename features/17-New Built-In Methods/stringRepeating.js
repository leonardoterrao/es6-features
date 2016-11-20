let depth = 2;

console.log('ES5');

console.log(Array((4 * depth) + 1).join("x"));
console.log(Array((3 + 1)).join("foo"));


console.log('\nES6');

console.log("x".repeat(4 * depth));
console.log("foo".repeat(3));