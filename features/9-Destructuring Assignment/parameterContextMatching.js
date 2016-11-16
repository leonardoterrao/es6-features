console.log('ES5');

function f5(arg) {
    var name = arg[0];
    var val = arg[1];
    console.log(name, val);
}

function g5(arg) {
    var n = arg.name;
    var v = arg.val;
    console.log(n, v);
}

function h5(arg) {
    var name = arg.name;
    var val = arg.val;
    console.log(name, val);
}

f5([ 'bar', 42 ]);
g5({ name: 'foo',  val: 7 });
h5({ name: 'bar', val: 42 });


console.log('\nES6');

function f6([name, val]) {
    console.log(name, val);
}

function g6({name: n, val: v}) {
    console.log(n, v);
}

function h6({name, val}) {
    console.log(name, val);
}

f6([ 'bar', 42 ]);
g6({ name: 'foo',  val: 7 });
h6({ name: 'bar', val: 42 });
