console.log('ES5');
var Shape5 = function (id, x, y) {

};

Shape5.prototype.toString = function (x, y) {
    return "Shape5(" + this.id + ")"
};

var Rectangle5 = function (id, x, y, width, height) {
    Shape5.call(this, id, x, y);

};

Rectangle5.prototype.toString = function () {
    return "Rectangle5 > " + Shape5.prototype.toString.call(this);
};

var Circle5 = function (id, x, y, radius) {
    Shape5.call(this, id, x, y);
};

Circle5.prototype.toString = function () {
    return "Circle5 > " + Shape5.prototype.toString.call(this);
};


console.log('\nES6');

class Shape6 {
    toString () {
        return `Shape6(${this.id})`
    }
}

class Rectangle6 extends Shape6 {
    constructor (id, x, y, width, height) {
        super(id, x, y)
    }
    toString () {
        return "Rectangle6 > " + super.toString()
    }
}

class Circle6 extends Shape6 {
    constructor (id, x, y, radius) {
        super(id, x, y)
    }
    toString () {
        return "Circle6 > " + super.toString()
    }
}

let rec = new Rectangle5(1,2,3,4,5);
console.log(rec.toString());

let cir = new Circle6(1,2,3,4);
console.log(cir.toString());

let sha = new Shape6(1,2,3);
console.log(sha.toString());