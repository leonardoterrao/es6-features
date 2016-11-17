console.log('ES5');

var Shape5 = function (id, x, y) {
    this.id = id;
    this.move5(x, y);
};
Shape5.prototype.move5 = function (x, y) {
    this.x = x;
    this.y = y;
};

var Rectangle5 = function (id, x, y, width, height) {
    Shape5.call(this, id, x, y);
    this.width = width;
    this.height = height;
};

Rectangle5.prototype = Object.create(Shape5.prototype);
Rectangle5.prototype.constructor = Rectangle5;

var Circle5 = function (id, x, y, radius) {
    Shape5.call(this, id, x, y);
    this.radius = radius;
};
Circle5.prototype = Object.create(Shape5.prototype);
Circle5.prototype.constructor = Circle5;


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

class Rectangle6 extends Shape6 {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
}

class Circle6 extends Shape6 {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}