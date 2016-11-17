console.log('ES5');

var Shape5 = function (id, x, y) {
    this.id = id;
    this.move5(x, y);
};

Shape5.prototype.move5 = function (x, y) {
    this.x = x;
    this.y = y;
};


console.log('\nES6');

class Shape6 {
    constructor (id, x, y) {
        this.id = id;
        this.move6(x, y);
    }
    move6(x, y) {
        this.x = x;
        this.y = y;
    }
}