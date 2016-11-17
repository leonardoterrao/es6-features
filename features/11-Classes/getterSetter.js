console.log('ES5');

var Rectangle5 = function (width, height) {
    this._width  = width;
    this._height = height;
};
Rectangle5.prototype = {
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    },
    set height(height) {
        this._height = height;
    },
    get height() {
        return this._height;
    },
    get area() {
        return this._width * this._height;
    }
};
var r5 = new Rectangle5(50, 20);
console.log(r5.area);


console.log('\nES6');
class Rectangle6 {
    constructor (width, height) {
        this._width  = width;
        this._height = height;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._width * this._height;
    }
}

var r6 = new Rectangle6(50, 20);
console.log(r6.area);
