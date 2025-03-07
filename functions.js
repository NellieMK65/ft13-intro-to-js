/**
 * Functions - piece of code that allows reusability
 * D.R.Y -> Do not Repeat Yourself
 *
 * Can accept one or more parameters separated by commas
 *
 * Parameter -> variables listed in the paranthesis of functions
 * Arguments -> Values that are passed when calling/invoking a function
 *
 * In order for declared functions to run, we need to call/invoke them
 */

// syntax
function functionName() {
	// function body
}

console.log('Good morning Arif');
console.log('Good morning, Jeff');

console.log(1 + 1);
console.log(345 + 783);

// function declaration
function greeting(name) {
	console.log('Good morning ' + name);
}

// call/invoke
greeting('Robert');
greeting('Ian');
greeting('John');

function sum(x, y = 3, z) {
	console.log(x);
	console.log(z);
	console.log(y);
	return x + y + z;
}

// sum();
// sum(2, 2);
// sum(10);
// sum(undefined, 10, 2);
console.log(sum(1, undefined, 1));

// our function doesn`t have an output even though there is some logic
// we are always going to get undefined
// if we want to get an output, we introduce the return keyword
function greetings(firstName, lastName) {
	return `Good morning ${firstName} ${lastName}`;
}

console.log(greetings('John', 'Doe')); // a function is just a complex expression ->
console.log(2 + 2); // -> evaluated too 4
