console.log('ES5');

console.log(

    [1, 3, 4, 2].filter(function (x) {
        return x > 3
    })[0]

);

console.log('\nES6');

console.log(
    [1, 3, 4, 2].find(x => x > 3)
);
