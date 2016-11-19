console.log('ES5');

// nothing equivalent in ES5


console.log('\nES6');

function async(proc, ...params) {
    var iterator = proc(...params);
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            let result;
            try {
                result = iterator.next(value);
            } catch (err) {
                reject(err);
            }

            if (result.done) {
                resolve(result.value);
            } else if (typeof result.value === 'object' && typeof result.value.then === 'function') {
                result.value.then((value) => {
                    loop(value);
                }, (err) => {
                    reject(err);
                });
            } else {
                loop(result.value);
            }
        };
        loop();
    });
}

function makeAsync(text, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), after);
    });
}

async(function* (greeting) {
    let foo = yield makeAsync('foo', 300);
    let bar = yield makeAsync('bar', 300);
    let baz = yield makeAsync('baz', 300);
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello").then((msg) => {
    console.log('Result: ', msg);
});
