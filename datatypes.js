/**
 * Datatypes - they allow us to represent real world data in a programming
 * language
 *
 * 1. Primitive -> string, number, boolean, undefined, null
 *
 * 2. Non-primitive -> objects, arrays
 *
 * symbols
 *
 * use the typeof keyword to check/know the datatype
 *
 */

// 1. Strings -> represent texts, paragraph
const firstName = 'Jane'; //double quotes
const lastName = 'Doe'; // single quote
const fullName = `Jane Doe`; // backticks
const studentName = 'Johnson`s';

console.log(studentName);

// string concatenation using the + operator
console.log(firstName + ` ` + lastName);

// BODMAS -> PEMDAS

// curly brackets -> {}
// paranthesis (soft brackets) -> ()
// square brackets -> []

// string interpolation - injecting values into strings - we must use the backticks
console.log(`Jane ${lastName}, age is ${2025 - 2000}`);
console.log(`${firstName} ${lastName}, ${'$' + 40000}`);

console.log(typeof fullName);

// 2. numbers -> whole numbers, decimals, negative
console.log(typeof 3);
console.log(typeof -40);
console.log(typeof 34.4353);

console.log(Math.sqrt(-4));

// 3. boolean -> true/false
console.log(typeof true);
console.log(typeof false);

// 4. objects -> collection of related data consisting of key, value pairs separated by
// comma - we use curly brackets
const student = {
	name: 'Jacob',
	class: 'Web 9',
	studentEmail: 'jacob@student.moringaschool.com',
	age: 23,
	isDisciplined: true,
};

console.log(typeof student);

// 5. arrays -> list of values enclosed using the square brackets
// arrays are just special types of objects
const students = ['Brian', 'Ruth', 'Daud'];
const scores = [23, 12, 34, 434, 343434, 34];

console.log(typeof students);

// 6. null -> represents an intentionally absent value
let name = null;
console.log(name);

// 7. undefined -> not assigned any value
let age;
console.log(age);
