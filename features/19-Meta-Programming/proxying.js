console.log('ES5');

// no equivalent in ES5

console.log('\nES6');

let target = {
    foo: 'Welcome, foo'
};
let proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Hello, ${name}`;
    }
});

console.log(proxy.foo);
console.log(proxy.world);
