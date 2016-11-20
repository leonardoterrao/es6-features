console.log('ES5');

// nothing equivalent in ES5


console.log('\nES6');

var l10nEN = new Intl.DateTimeFormat('en-US');
var l10nDE = new Intl.DateTimeFormat('de-DE');

console.log(l10nEN.format(new Date('2016-11-20')));
console.log(l10nDE.format(new Date('2016-11-20')));