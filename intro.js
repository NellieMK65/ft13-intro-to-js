// Syntax -> rules associated with a programming language/tool

// Single line comment

/**
 * Multiline comment
 *
 */
console.log(2 + 2);
console.log(2 + (3 - 5));
console.log('Hello World');

/**
 * Expression
 * 1. Constant
 * 2. Assignment
 * 3. Lookup
 *
 * Evaluation is the breakdown of expressions to
 * constant expressions
 *
 * Variables in js
 */

// 1. Constant - doesn`t need to be broken down
('Jane Doe');

// Assignment - we use the operator (=)
// syntax -> on the left, we have the variable name then on
// right we have the value

// A variable is just a container to store values for later
// retrieval
/**
 * Rules when naming variables
 * 1. We should use the camelCase naming convention
 * 2. JS is case sensitive
 * 3. Don`t start variables with numbers, always start with a
 * lowercase letter
 * 4. Do not use reserved keywords
 * 5. As a rule of thumb always use const or let to create variables, there is
 * also the var keyword but we do not use it
 */
fullName = 'Jane Doe';

firstName = 'John';

dateOfBirth = 2000;

// lookup expression
console.log(fullName);

num = 3 + 6;

// NUM = 78

console.log(num);

// let keyword -> allows mutation of the value
// allows reassigning of values
// it does not allow redeclaring
let age;

age = 21;

console.log(age);

// reassignment - giving a different value to the same variable
age = 20;

console.log(20);

// let age = 45;

var goat = 'CR7';

console.log(goat);

goat = 'Messi';

console.log(goat);

// var keyword allows redeclaring
var goat = 'Anthony';

// const keyword -> value is immutable
const lastName = 'Doe';

console.log(lastName);

// we cannot reassign
// lastName = "New last name"

// we cannot redeclare
// lastName = 'new name';
