console.log('ES5');

function range5(start, end, step) {
    var list = [];
    while (start < end) {
        list.push(start);
        start += step;
    }
    return list;
}

var r = range5(0, 10, 2);
for (var i = 0; i < r.length; i++) {
    console.log(r[i]);
}


console.log('\nES6');

function* range6(start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
}

for (let i of range6(0, 10, 2)) {
    console.log(i);
}