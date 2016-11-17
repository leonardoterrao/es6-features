LibMathPP5 = {};
for (symbol in LibMath5) {
    if (LibMath5.hasOwnProperty(symbol)) {
        LibMathPP5[symbol] = LibMath5[symbol];
    }
}

LibMathPP5.e5 = 2.71828182846;
LibMathPP5.exp5 = function (x) {
    return Math.exp(x)
};
