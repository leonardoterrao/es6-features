console.log('ES5');

function msgAfterTimeout5(msg, who, timeout, onDone) {
    setTimeout(function () {
        onDone(msg + ' Hello ' + who + '!');
    }, timeout);
}

msgAfterTimeout5('', 'Foo', 100, function (msg) {
    msgAfterTimeout5(msg, 'Bar', 200, function (msg) {
        console.log('ES5: done after 300ms: ' + msg)
    });
});


console.log('\nES6');

function msgAfterTimeout6(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
    });
}

msgAfterTimeout6('', 'Foo', 100).then((msg) =>
    msgAfterTimeout6(msg, 'Bar', 200)
).then((msg) =>
    console.log(`ES6: done after 300ms: ${msg}`)
);