console.log('ES5');

var dst5 = { quux: 0 };
var src51 = { foo: 1, bar: 2 };
var src52 = { foo: 3, baz: 4 };
Object.keys(src51).forEach(function (k) {
    dst5[k] = src51[k];
});
Object.keys(src52).forEach(function (k) {
    dst5[k] = src52[k];
});

console.log(dst5.quux);
console.log(dst5.foo);
console.log(dst5.bar);
console.log(dst5.baz);


console.log('\nES6');

var dst6 = { quux: 0 };
var src61 = { foo: 1, bar: 2 };
var src62 = { foo: 3, baz: 4 };

Object.assign(dst6, src61, src62);

console.log(dst5.quux);
console.log(dst5.foo);
console.log(dst5.bar);
console.log(dst5.baz);