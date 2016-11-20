console.log('ES5');

// nothing equivalent in ES5


console.log('\nES6');

var l10nEN = new Intl.NumberFormat('en-US');
var l10nDE = new Intl.NumberFormat('de-DE');

console.log(l10nEN.format(1234567.89));
console.log(l10nDE.format(1234567.89));
