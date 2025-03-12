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
// With arrow functions, we cannot do hoisting
// add(10, 10)
const add = (a, b) => {
	return a + b;
};
// Js with normal functions allows us to do hoisting which basically means accessing the
// function before declaring
console.log(sumb(1, 1));
function sumb(a, b) {
	// context in js accessed using this keyword

	return a + b;
}
// const sayHi = (a, b) => `Hi, ${a} ${b}`

console.log(add(3, 6));
console.log(ongeza(10, 10));

// function expression is when you assign a function to a variable, more often referred to as
// anonymous functions (the function does`t have a name)
const greet = (name) => {
	return `Good evening ${name}`;
};

const validateNumberInput = (input) => {
	return typeof input === 'number'
		? input
		: `Input "${input}" is not a number`;
};

console.log(validateNumberInput(32));

const ageChecker = (age, validator) => {
	console.log(validator(age));
	return age > 18 ? 'You can go out at night' : 'You cannot go out';
};

console.log(greet('Elon'));

console.log(ageChecker('23', validateNumberInput));

// callback functions -> functions passed to other functions as arguments and can be executed
// later

// through hoisting, we are able to call/invoke the function before declaring it
// only possible when working with normal functions
console.log(perimeterOfRectangle(5, 3));

function perimeterOfRectangle(l, w) {
	console.log(`l = ${l}`);
	console.log(`w= ${w}`);
	return `${l * 2 + w * 2}`;
	return 2 * l + 2 * w;
}
console.log(perimeterOfRectangle(5, 10));

// funtions are firstclass citizen meaning we can treat them like any other values
// since it`s a function, the rules of functions must still applied
// Now this becomes a function expresssion (function assigned to variables)
// The function expressions can work without function names i.e anonymous functions

// functions expressions don`t allow hoisting since the function is stored inside
// a variable
// console.log(perimeter(3, 4))

const perimeter = function (l, w) {
	return l * 2 + w * 2;
};

console.log(perimeter(7, 5));

const newVariable = 9;
// we can only access a variable after declaring it -> this is in relation to function expressions
console.log(newVariable);

function calculator(l, w, perimeterCalculator) {
	console.log(perimeterCalculator);
	// console.log(c(7, 5))
	// at this point, we are executing the function perimeter through the placeholder c
	return perimeterCalculator(l, w);
	// console.log(x)
	return z;
}

const z = 8;
const calculatedOutput = calculator(7, 5, perimeter);

console.log(calculatedOutput);
