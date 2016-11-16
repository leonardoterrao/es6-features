function quxx() {
    return 'olar';
}

console.log('ES5');
var obj5 = {
    foo: 'bar'
};
obj5['baz' + quxx()] = 42;

console.log(obj5);


console.log('\nES6');

let obj6 = {
    foo: 'bar',
    [ 'baz' + quxx()]: 42
};

console.log(obj6);