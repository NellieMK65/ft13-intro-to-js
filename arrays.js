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
students.splice(2, 0, 'Bildad'); // this adds Bildad at position 2
students.splice(2, 1); // now this deletes the item at position 2 since the count is 1
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
console.log(colors.push('green', 'blue'));
console.log(colors);

// 2. .unshift() -> add one or more elements at the beginning of an array
colors.unshift('yellow', 'purple');
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
/**
 * Slice() -> nondestructive method (does not mutate the original array)
 *
 * Make a copy of the array
 * Delete elements in the array
 */

// as long as no arguments are passed, the method will always makea copy
const copyOfColors = colors.slice();
console.log(copyOfColors);

//spread operator (...) -> makes a copy too
const secondCopyOfColors = [...colors];
console.log(secondCopyOfColors);

const deletedColors = colors.slice(1);
console.log(deletedColors);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deletedNumbers = numbers.slice(3, 7);
console.log(numbers);
// console.log(deletedNumbers.unshift(1, 2 ,3))
console.log(deletedNumbers);
/**
 * splice() -> destructive (mutates the original array)
 *
 * Deleted elements
 * Add new element(s)
 * Update the element(s)
 */

// 1. Deleting elements
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
console.log(days);

const deletedDays = days.splice(3, 3);
console.log(deletedDays);
console.log(days);

// Adding element(s)
// ! The second argument should always be 0
days.splice(3, 0, 'Wed', 'Thur', 'Fri');
console.log(days);

const months = ['Jan', 'Feb', 'Mar'];
months.splice(3, 0, 'April', 'May', 'Jun', 'Jun', 'Jun');
console.log(months.length);
months.splice(months.length, 0, 'July');
months.splice(-2, 0, 'Aug');
console.log(months);

// updating, the second argument is usually 1,
console.log(months.splice(2, 2, 'March', 'April'));
// update Jan & Feb
console.log(months.splice(0, 2, 'January', 'Febraury'));
// update Jun
console.log(months.splice(months.lastIndexOf('Jun'), 1, 'June'));
console.log(months);

// to get the total elements in an array, we use the .length
console.log(colors.length);

// get the position(index) of an element
const position = colors.indexOf('yellow');
console.log(position);

const modifiedMonths = months.map((month) => {
	if (month === 'Jun') {
		return 'June';
	} else {
		return month;
	}
});

console.log(modifiedMonths);

const positionsOfRed = colors
	.map((color, index) => {
		if (color === 'red') {
			return index;
		}
	})
	.filter((val) => val);

console.log(positionsOfRed);
