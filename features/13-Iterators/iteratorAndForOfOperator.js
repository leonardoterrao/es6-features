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
    n5 = fibonacci5.next();
    if (n5 > 1000) {
        break;
    }

    console.log(n5);
}


console.log('\nES6');

let fibonacci6 = {
    [Symbol.iterator]() {
        let pre = 0;
        let cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {
                    done: false,
                    value: cur };
            }
        }
    }
};

for (let n6 of fibonacci6) {
    if (n6 > 1000) {
        break;
    }
    console.log(n6);
}


