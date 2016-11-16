var a = 'ABC';
var b = 'DEF';

// ES 5
console.log('ES.5');

var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    console.log(x)
}
for (i = 0; i < b.length; i++) {
    y = b[i];
    console.log(y)
}

var callbacks5 = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks5[i] = function() { return i * 2; };
    })(i);
}
console.log(callbacks5[0]() === 0);
console.log(callbacks5[1]() === 2);
console.log(callbacks5[2]() === 4);


// ES 6
a = 'JKL';
b = 'MNO';

console.log('\nES.6');
for (let i = 0; i < a.length; i++) {
    let x = a[i];
    console.log(x);
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
    console.log(y);
}

let callbacks6 = [];
for (let i = 0; i <= 2; i++) {
    callbacks6[i] = function () { return i * 2 }
}
console.log(callbacks6[0]() === 0);
console.log(callbacks6[1]() === 2);
console.log(callbacks6[2]() === 4);