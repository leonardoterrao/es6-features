console.log('ES5');

var s5 = {};
s5['hello'] = true;
s5['goodbye'] = true;
s5['hello'] = true;

console.log(Object.keys(s5).length === 2);
console.log(s5['hello'] === true);

for (var key in s5) {
    if (s5.hasOwnProperty(key)) {
        console.log(s5[key]);
    }
}


console.log('\nES6');

let s6 = new Set();
s6.add('hello').add('goodbye').add('hello');

console.log(s6.size === 2);
console.log(s6.has('hello') === true);

for (let key of s6.values()) {
    console.log(key);
}