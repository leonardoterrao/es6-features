var bar = '1233';
var bazz = 'xpto';
var quxx = 're33rg43';

console.log('ES5');

get(['http://example.com/foo?bar=', "&quux=", ''], bar + bazz, quxx);

console.log('\nES6');

get`http://example.com/foo?bar${bar + bazz}%quux=${quxx}`;