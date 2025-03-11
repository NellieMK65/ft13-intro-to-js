/**
 * Functions
 * D.R.Y -> Don`t Repeat Yourself
 *
 * To avoid repeating the same code through out our codebase, we can use
 * a function to wrap that code and reuse it.
 *
 * All the rules used when creating variables, should be applied when
 * creating function names
 *
 * Every function in js always returns undefined unles we explictly specify a return
 * value using the `return` keyword
 */

function functionName(parameters) {
	// function body
}

// function without parameters
function morning() {
	return 'Good morning, it`s on Tuesday';
}

// to use a declared function, we have to call/invoke it using its name followed by arguments (optional)
// enclosed inside paranthesis
// call/invoke
console.log(morning());

// function with one parameter
function square(a) {
	// return allows a function to give an output
	// we can only have one return keyword unless we are using selection statements
	// the return keyword stops execution of a function
	console.log('Getting square of ' + a);
	return a ** 2;
}

// in this case, 2 can be refrenced as as argument(values passed into functions)
console.log(square(2));
const output = square(3);
console.log(output);

// function with multiple parameters

function sum(a = 0, b = 0) {
	console.log(a, b);
	// validation
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	}

	return 'A number is expected for both a and b';
}

const num1 = 2;
const num2 = 2;
// the order in which arguments are passed should match the parameters
console.log(sum(3, 4));
console.log(sum(2, 2));

function greeting(firstName, lastName) {
	return `Good morning ${firstName} ${lastName}, have a nice day`;
}

console.log(greeting('Doe', 'Jane'));

// ES6 allows us to write shorter functions using the the arrow function

/**
 * Functions in js are first-class citizen meaning they can be treated like other values
 * This brought about the ability to work with arrow functions and callback functions
 */
const name = 'Bildad';
const age = 99;
const ongeza = sum;
const add = (a, b) => {
	return a + b;
};
function sumb(a, b) {
	return a + b;
}
// const sayHi = (a, b) => `Hi, ${a} ${b}`

console.log(add(3, 6));
console.log(ongeza(10, '19'));
