console.log('ES5');

var fibonacci5 = {
    next: (function () {
        var pre = 0;
        var cur = 1;
        return function () {
            tmp = pre;
            pre = cur;
            cur += tmp;
            return cur;
        }
    })()
};

var n5;
for (;;) {
    n = fibonacci5.next();
    if (n > 1000) {
        break;
    }
    console.log(n);
}


console.log('\nES6');

let fibonacci6 = {
    *[Symbol.iterator]() {
        let pre = 0;
        let cur = 1;
        for (;;) {
            [ pre, cur ] = [ cur, pre + cur ];
            yield cur;
        }
    }
};

for (let n of fibonacci6) {
    if (n > 1000) {
        break;
    }

    console.log(n);
}
