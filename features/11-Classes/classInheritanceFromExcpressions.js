console.log('ES5');

var aggregation5 = function (baseClass, mixins) {
    var base = function () {
        baseClass.apply(this, arguments);
        mixins.forEach(function (mixin) {
            mixin.prototype.initializer.call(this);
        }.bind(this));
    };
    base.prototype = Object.create(baseClass.prototype);
    base.prototype.constructor = base;
    var copyProps = function (target, source) {
        Object.getOwnPropertyNames(source).forEach(function (prop) {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return;
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    };
    mixins.forEach(function (mixin) {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

var Colored5 = function () {};
Colored5.prototype = {
    initializer: function ()  { this._color = "white"; },
    getColor:    function ()  { return this._color; },
    setColor:    function (v) { this._color = v; }
};

var ZCoord5 = function () {};
ZCoord5.prototype = {
    initializer: function ()  { this._z = 0; },
    getZ:        function ()  { return this._z; },
    setZ:        function (v) { this._z = v; }
};

var Shape5 = function (x, y) {
    this._x = x; this._y = y;
};
Shape5.prototype = {
    getX: function ()  { return this._x; },
    setX: function (v) { this._x = v; },
    getY: function ()  { return this._y; },
    setY: function (v) { this._y = v; }
};

var _Combined5 = aggregation5(Shape5, [ Colored5, ZCoord5 ]);
var Rectangle5 = function (x, y) {
    _Combined5.call(this, x, y);
};
Rectangle5.prototype = Object.create(_Combined5.prototype);
Rectangle5.prototype.constructor = Rectangle5;

var rect5 = new Rectangle5(7, 42);
rect5.setZ(1000);
rect5.setColor("red");
console.log(rect5.getX(), rect5.getY(), rect5.getZ(), rect5.getColor());



console.log('\nES6');

var aggregation6 = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    };
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return;
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
    };
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    });
    return base
};

class Colored6 {
    initializer () {
        this._color = "white"
    }
    get color () {
        return this._color
    }
    set color (v) {
        this._color = v
    }
}

class ZCoord6 {
    initializer () {
        this._z = 0
    }
    get z () {
        return this._z
    }
    set z (v) {
        this._z = v
    }
}

class Shape6 {
    constructor (x, y) {
        this._x = x;
        this._y = y
    }
    get x () {
        return this._x
    }
    set x (v) {
        this._x = v
    }
    get y () {
        return this._y
    }
    set y (v) {
        this._y = v
    }
}

class Rectangle6 extends aggregation6(Shape6, Colored6, ZCoord6) {}

var rect6 = new Rectangle6(7, 42);
rect6.z = 1000;
rect6.color = "red";
console.log(rect6.x, rect6.y, rect6.z, rect6.color);
