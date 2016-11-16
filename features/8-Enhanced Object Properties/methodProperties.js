console.log('ES5');

obj5 = {
    foo: function (a, b) {
        return a + b;
    },
    bar: function (x, y) {
        return y + x;
    }
    // quxx no equivalent in ES5;
};
console.log(obj5);
console.log(obj5.foo('a', 'b'));
console.log(obj5.bar('x', 'y'));


console.log('\nES6');

obj6 = {
    foo(a, b) {
        return a + b;
    },
    bar(x, y) {
        return y + x;
    },
    *quxx(x, y) {
        console.log(x + y + 'quxx');
    }
};

console.log(obj6);
console.log(obj6.foo('a', 'b'));
console.log(obj6.bar('x', 'y'));
console.log(obj6.quxx('x', 'y'));
