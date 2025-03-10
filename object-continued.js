/**
 * Objects
 */

const order = {
	cost: 700,
	customer: {
		name: 'Jane Doe',
		phone: '0712345678',
		'email addess': 'janedoe@gmail.com',
	},
	items: [
		{
			name: 'Fries',
			price: 100,
			quantity: 2,
			isAdult: false,
		},
		{
			name: 'Choma',
			price: 500,
			quantity: 1,
			isAdult: true,
		},
	],
	colors: ['black', 'white'],
	7: 'CR',
	key: 'new value',
};
console.log(order.colors[0], order.items[1].name);
console.log(`${order.colors[1]}, ${order.items[1].name}`);

// Access values using the dot notation (.) or the square bracket
console.log(order.customer.phone);
console.log(order['customer'].name);
console.log(order.items[0].quantity);
const customer = 'customer';
console.log(order['customer']['email addess']);
console.log(order.customer.name);
console.log(order['7']);

// adding, updating and deleting
// adds since the key does not exist
order['table'] = 'Table 8';

// updates
order.cost = 1000;

console.log(order.table);
console.log(order.cost);

// deleting
delete order['7'];

console.log(order['7']);

// Object methods
console.log(Object.keys(order));
console.log(Object.values(order));
console.log(Object.entries(order));

// Object iteration using for...in
for (const brian in order) {
	console.log(brian);
	// console.log(order[brian])
}

const person = {
	// firstName: 'Ruth'
	lastName: 'Iguta',
};

const checkout = 'lastName';
console.log(checkout);

console.log(person.firstName);
console.log(person['firstName']);
console.log(person[checkout]);
// for later on
const total = order.items.reduce(
	(prev, curr) => prev + curr.price * curr.quantity,
	0
);

console.log(total);

const prices = order.items.map((item) => ({ itemPrice: item.price }));
console.log(prices);
