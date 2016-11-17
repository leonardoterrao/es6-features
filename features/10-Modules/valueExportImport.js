console.log('ES5');

var math5 = LibMath5;
console.log('2π = ' + math5.sum5(math5.pi5, math5.pi5));

var sum5 = LibMath5.sum5;
var pi5 = LibMath5.pi5;
console.log('2π = ' + sum5(pi5, pi5));


console.log('\nES6');

import * as math6 from 'lib/math6';
console.log('2π = ' + math6.sum6(pi6, pi6));

import { sum6, pi6 } from 'lib/math6';
console.log('2π = ' + sum6(pi6, pi6));