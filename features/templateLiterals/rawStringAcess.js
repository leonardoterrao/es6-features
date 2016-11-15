console.log('ES5');
console.log('no equivalent in ES5')

console.log('\nES6');
function quux(strings, ...values) {
    console.log(strings[0] === 'foo\n');
    console.log(strings[0]);

    console.log(strings[1] === 'bar');
    console.log(strings[1]);

    console.log(strings.raw[0] === 'foo\\n');
    console.log(strings.raw[0]);

    console.log(strings.raw[1] === 'bar');
    console.log(strings.raw[1]);

    console.log(values[0] === 42);
    console.log(values[0]);
}

quux `foo\\n${ 42 }bar`;

console.log(String.raw `foo\\n${ 42 }bar`);
