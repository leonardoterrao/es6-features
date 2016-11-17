console.log('ES5');

var Rectangle5 = function (id, x, y, width, height) {

};
Rectangle5.defaultRectangle = function () {
    return new Rectangle5("default", 0, 0, 100, 100);
};
var Circle5 = function (id, x, y, width, height) {

};
Circle5.defaultCircle = function () {
    return new Circle5("default", 0, 0, 100);
};
var defRectangle5 = Rectangle5.defaultRectangle();
var defCircle5 = Circle5.defaultCircle();

console.log(defRectangle5);
console.log(defCircle5);


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
    static defaultRectangle () {
        return new Rectangle6("default", 0, 0, 100, 100)
    }
}
class Circle6 extends Shape6 {
    static defaultCircle () {
        return new Circle6("default", 0, 0, 100)
    }
}

var defRectangle6 = Rectangle6.defaultRectangle();
var defCircle6 = Circle6.defaultCircle();

console.log(defRectangle6);
console.log(defCircle6);