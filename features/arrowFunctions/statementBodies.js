console.log('ES5');

var nums = [2, 5, 15, 18, 20, 51];
var fives = [];

nums.forEach(function (v) {
    if (v % 5 === 0) {
        fives.push(v);
    }
});
console.log(fives);


console.log('\nES6');

fives = [];
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});
console.log(fives);