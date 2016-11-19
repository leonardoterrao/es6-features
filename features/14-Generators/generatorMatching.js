console.log('ES5');

// nothing equivalent in ES5

console.log('\nES6');

let fibonacci = function* (numbers) {
    let pre = 0;
    let cur = 1;
    while (numbers-- > 0) {
        [ pre, cur ] = [ cur, pre + cur ];
        yield cur;
    }
};

for (let n of fibonacci(1000)) {
    console.log(n);
}

let numbers = [...fibonacci(1000)];
console.log('numbers: ');
console.log(numbers);

let [n1, n2, n3, ...others ] = fibonacci(1000);

console.log('variables: ');
console.log(n1);
console.log(n2);
console.log(n3);
console.log(others);