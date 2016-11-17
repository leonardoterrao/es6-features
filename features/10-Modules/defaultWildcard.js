console.log('ES5');

var exp5 = LibMathPP5.exp5, pi5 = LibMathPP5.pi5, e5 = LibMathPP5.e;
console.log("e^{π} = " + exp5(pi5));


console.log('\nES6');

import exp, { pi, e } from "lib/mathplusplus";
console.log("e^{π} = " + exp(pi));
