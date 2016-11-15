console.log('ES5');

var self = this;
var nums = [2, 5, 15, 18, 20, 51];
var fives = [];

this.nums.forEach(function (v) {
    if (v % 5 === 0) {
        self.fives.push(v);
    }
});
console.log(self.fives);

this.nums.forEach(function (v) {
    if (v % 5 === 0) {
        this.fives.push(v);
    }
}, this);
console.log(this.fives);

this.nums.forEach(function (v) {
    if (v % 5 === 0) {
        this.fives.push(v)
    }
}.bind(this));
console.log(this.fives)


console.log('\nES5');
this.nums.forEach((v) => {
    if (v % 5 === 0) {
        self.nums.push(v);
    }
});
