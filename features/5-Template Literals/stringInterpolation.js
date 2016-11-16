var customer = { name: 'Foo' };
var card = { amount: 7, product: 'Bar', unitPrice: 42};

console.log('ES5');
var message5 = 'Hello ' + customer.name + ', \n' +
'want to buy ' + card.amount + ' ' +  card.product + ' for\n' +
'a total of ' + (card.amount * card.unitPrice) + ' bucks?';

console.log(message5);

console.log('\nES6');
var message6 = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitPrice} bucks?`;

console.log(message6);
