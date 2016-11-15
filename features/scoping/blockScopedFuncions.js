console.log('ES.5');

(
    function () {
        var foo = function () { return 1 };
        console.log(foo() === 1);
        (function () {
            var foo = function () { return 2 };
            console.log(foo() === 2)
        })();
        console.log(foo() === 1);
    }
)();


console.log('\nES.6');

{
    function foo() { return 1 }
    console.log(foo() === 1);
    {
        function foo() { return 2 }
        console.log(foo() === 2);
    }

    console.log(foo() === 1);
}
