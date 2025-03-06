/**
 * Statements
 *
 * Default sequence/execution order -> left to right, top to bottom
 *
 * Selection -> we can choose to run certain codes and not others
 * Repetion -> we can choose to run certain codes until a condition is met
 */

// Selection using if

const age = 24;
const nationality = 'Kenyan';
const constituency = 'Juja';
const hasVoted = false;
console.log(typeof hasVoted);
// the first part of the if condition only checks for truthiness
if (
	age >= 18 &&
	nationality === 'Kenyan' &&
	constituency === 'Juja' &&
	hasVoted === false
) {
	console.log('You can vote');
} else {
	// the else part allows us to account for falsiness
	console.log('You cannot vote');
}

// multiple conditions
const fruit = 'apple';

if (fruit === 'apple') {
	console.log('Placed in the apple basket');
} else if (fruit === 'mango') {
	console.log('Placed in the mango basket');
} else if (fruit === 'banana' || fruit === 'apple') {
	console.log('Placed in the banana basket');
} else {
	console.log(`We do not have a basket for ${fruit}`);
}

// selection using switch - this is an assignment

// Repetition using while loop

// Natural terminating loop

let count = 6;

const studentEmails = ['john@student'];

while (count <= 5) {
	console.log(`Count ${count}`);
	// terminating condition
	count = count + 2;
}

console.log(count);

let timer = 10;

while (timer <= 9) {
	console.log(`Alarm ringing, ${timer}`);
	timer = timer + 1;
}

// do/while - always runs at least once

let countTwo = 6;

do {
	console.log(`Count ${countTwo}`);
	// countTwo++;
	countTwo = countTwo + 1;
} while (countTwo <= 5);

console.log(countTwo);

console.log('Execution is still happening');
