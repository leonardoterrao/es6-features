function getASTNode() {
    return {
        op: 'OPX',
        lhs: {
            op: 'OPLHSX'
        },
        rhs: 'RHSX'
    }
}

console.log('ES5');
var tmp = getASTNode();
var a5 = tmp.op;
var b5 = tmp.lhs.op;
var c5 = tmp.rhs;
console.log(a5);
console.log(b5);
console.log(c5);


console.log('\nES6');
let { op: a6, lhs: {op: b6}, rhs: c6 } = getASTNode()
console.log(a6);
console.log(b6);
console.log(c6);