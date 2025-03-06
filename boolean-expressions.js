/**
 * Boolean expressions - expressions that evaluate to true/false
 * true/false
 *
 * Expression -> combination of data & symbols called operators
 * Evaluation -> Executing the expression to a constant expression
 */

// 1. Comparison operators - compare equality of values/datatypes

/**
 * Strict equality operator (===)
 *
 * Compares values and datatypes
 */
console.log(2 === 2);
console.log(2 === '2');
console.log(Boolean('robert' === 'nelson'));
/**
 * Strict inequality operator (!==)
 *
 * Checks if the values plus datatype is not equal
 */
console.log(2 !== 2);

/**
 * Loose equality (==) & inequality (!=) operator
 * compares the values only
 */
console.log(2 == '2');
console.log(2 != '3');

// 2. Logical operators

// a. NOT/bang operator (!) returns the opposite
console.log(!true);
console.log(!false);

// b. Double bang operator (!!) -> allows you to convert other datatypes to boolean
// It`s a shortcut to a boolean constructor
console.log(Boolean('Robert'));
console.log(!!'');
console.log(1 + 2 * 3);
// coersion -> converts on datatype to another
console.log('Jane' + ` ` + 'Doe' + 2 + 1 + 1);
console.log(1 + '2Jane');
// c. AND (&&) and the OR (||) -> double pipes - they allow combining of
// boolean expressions
console.log(2 === 2 && 2 == '3');
console.log((2 === 2 && 2 == '3') || 3 == 3);

// 3. Number operators, less than, greater than, less than or equal to
const num1 = 50;
const num2 = 34;
console.log(num1 < num2);
console.log(34 >= 34);

// Statements + Execution sequence
