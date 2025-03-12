// Arrays -> list of values (any datatype) enclosed by square bracket and are separated by a comma

// 1. The array constructor
const fruits = new Array();
console.log(fruits);

const user = {
	name: 'John Doe',
	address: {
		county: 'Nairobi',
		subCounty: 'Ngong',
		poBox: 3423,
	},
};

console.log(user.address.county);
console.log(user['address']['subCounty']);

user['age'] = 50;
user['address']['district'] = 'CBD';
user['name'] = 'Jane';
// delete user['address']
console.log(user);

// 2. Use the square bracket - this is the most common
const students = [
	'Paul',
	'James',
	'Sharon',
	['red', 'green', { colorName: 'blue' }],
];
console.log(students);

// Accessing values inside any array
// we use index - position of an element inside the array
// ! The index always starts at 0
console.log(students[3][2]['colorName']);

// adding
students[4] = 'Trevor';
students[5] = 'Bildad';
// updating
students[0] = 'Jeff';
// deleting
delete students[4];

students[3].push('violet', 'pink');

console.log(students);

const students2 = [
	`Paul`,
	`Anna`,
	`Sharon`,
	`James`,
	[`red`, `green`, { colorName: `blue` }],
];
console.log(students2[4][2]['colorName']);

// Array methods -> mutating array methods (push, shift, pop, unshift)
const colors = ['red'];
console.log(colors);
/**
 * Adding elements
 */

// 1. .push() -> add one ore more elements at the end of an array
colors.push('green', 'blue');
console.log(colors);

// 2. .unshift() -> add one or more elements at the beginning of an array
colors.unshift('yellow', 'purple', 'red', 'red', 'red', 'blue', 'red');
console.log(colors);

/**
 * Remining elements
 */

// 1. .pop() -> removes the last element at the end of an array
const deletedColor = colors.pop();
console.log(deletedColor);
console.log(colors);

// 2. .shift() -> removes the first element at the beginnig of an array
colors.shift();
console.log(colors);

// slice, splice

// to get the total elements in an array, we use the .length
console.log(colors.length);

// get the position(index) of an element
const position = colors.indexOf('yellow');
console.log(position);

const positionsOfRed = colors
	.map((color, index) => {
		if (color === 'red') {
			return index;
		}
	})
	.filter((val) => val);

console.log(positionsOfRed);
