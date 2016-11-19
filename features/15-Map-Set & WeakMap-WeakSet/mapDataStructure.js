console.log('ES5');

var m5 = {};
m5['hello'] = 42;
//no equivalent in ES5
//no equivalent in ES5
console.log(Object.keys(m5).length === 2);
for (key in m5) {
    if (m5.hasOwnProperty(key)) {
        var val = m5[key];
        console.log(key + ' = ' + val);
    }
}


console.log('\nES6');

let m6 = new Map();
m6.set('hello', 42);
m6.set('oi', 34);
m6.set('oi');
console.log(m6.size === 2);
for (let [ key, val ] of m6.entries()) {
    console.log(key + ' = ' + val);
}