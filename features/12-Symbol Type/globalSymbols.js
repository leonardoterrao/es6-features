console.log('ES5');

// no equivalent in ES5


console.log('\nES6');

console.log(Symbol.for('app.foo') === Symbol.for('app.foo'));

const foo = Symbol.for('app.foo');
const bar= Symbol.for('app.bar');
console.log(Symbol.keyFor(foo));
console.log(Symbol.keyFor(bar));

console.log(typeof foo === 'symbol');
console.log(typeof bar === 'symbol');

let obj = {};
obj[foo] = "foo";
obj[bar] = "bar";

console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
