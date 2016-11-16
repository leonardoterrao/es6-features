console.log('ES5');
var parser5 = function (input, match) {
    for (var i, found, inputTmp = input; inputTmp !== ""; ) {
        for (i = 0; i < match.length; i++) {
            if ((found = match[i].pattern.exec(inputTmp)) !== null) {
                match[i].action(found);
                inputTmp = inputTmp.substr(found[0].length);
                break;
            }
        }
    }
};

var report5 = function (match) {
    console.log(JSON.stringify(match));
};

parser5('Foo 1 Bar 7 Baz 42', [
    { pattern: /^Foo\s+(\d+)/, action: function (match) { report5(match) }},
    { pattern: /^Bar\s+(\d+)/, action: function (match) { report5(match) }},
    { pattern: /^Baz\s+(\d+)/, action: function (match) { report5(match) }},
    { pattern: /^\s*/, action: function (match) {}}
]);


console.log('\nES6');

let parser6 = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
        for (let i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos;
            let found;
            if ((found = match[i].pattern.exec(input)) !== null) {
                match[i].action(found);
                pos = match[i].pattern.lastIndex;
                break;
            }
        }
    }
};

let report6 = (match) => {
    console.log(JSON.stringify(match));
};
parser6("Foo 1 Bar 7 Baz 42", [
    { pattern: /^Foo\s+(\d+)/y, action: (match) => report6(match) },
    { pattern: /^Bar\s+(\d+)/y, action: (match) => report6(match) },
    { pattern: /^Baz\s+(\d+)/y, action: (match) => report6(match) },
    { pattern: /^\s*/y, action: (match) => {}            }
]);