console.log('ES.5');

Object.defineProperty(typeof global === "object" ? global : window, 'PI', {
    value: 3.141593,
    enumerable: true,
    writable: false,
    configurable: false
});
console.log(PI);


console.log('\nES.6');

const PI2 = 3.1415926;
console.log(PI2);