function getASTNode() {
    return {
        op: 'OPX',
        lhs: 'LHSX',
        rhs: 'RHSX'
    }
}

console.log('ES5');

var tmp5 = getASTNode();
var op5 = tmp5.op;
var lhs5 = tmp5.lhs;
var rhs5 = tmp5.rhs;
console.log(op5);
console.log(lhs5);
console.log(rhs5);


console.log('\nES6');

let { op, lhs, rhs } = getASTNode();
console.log(op);
console.log(lhs);
console.log(rhs);
