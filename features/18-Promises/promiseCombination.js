function fetchAsync(url, timeout, onData, onError) {

}

console.log('ES5');


function fetchAll(request, onData, onError) {
    var result = [];
    var results = 0;
    for (var i = 0; i < request.length; i++) {
        result[i] = null;
        (function (i) {
            fetchAsync(request[i].url, request[i].timeout, function (data) {
                result[i] = data;
                if (++results === request.length)
                    onData(result);
            }, onError);
        })(i);
    }
}

fetchAll([
    { url: "http://example/foo.txt", timeout: 500 },
    { url: "http://example/bar.txt", timeout: 500 },
    { url: "http://example/baz.txt", timeout: 500 }
], function (data) {
    var foo = data[0];
    var bar = data[1];
    var baz = data[2];

    console.log('success: foo=' + foo + ' bar=' + bar + ' baz=' +baz);
}, function (err) {
    console.log('Error: ' + err);
});


console.log('\nES6');


let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject);
    })
};
Promise.all([
    fetchPromised("http://example/foo.txt", 500),
    fetchPromised("http://example/bar.txt", 500),
    fetchPromised("http://example/baz.txt", 500)
]).then((data) => {
    let [ foo, bar, baz ] = data;
    console.log(`success: foo=${bar} bar=${bar} baz=${baz}`);
}, (err) => {
    console.log(`Error: ${err}`);
});