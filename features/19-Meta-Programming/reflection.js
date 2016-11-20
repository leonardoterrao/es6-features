console.log('ES5');

var obj5 = { a: 1};
Object.defineProperty(obj5, 'b', { value: 2 });
// no equivalent in ES5;
console.log(Object.getOwnPropertyNames(obj5));


console.log('\nES6');

let obj6 = { a: 1};
Object.defineProperty(obj6, 'b', { value: 2 });
obj6[Symbol('c')] = 3;
console.log(Reflect.ownKeys(obj6));
