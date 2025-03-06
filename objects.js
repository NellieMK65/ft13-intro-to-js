/**
 * Objects -> non primitive
 *
 * Collection data with key/value pairs (properties)
 *
 * The value can be of any datatype
 *
 * we use curly brackets -> {}
 */

const car = {
	engine: 'v8',
	color: 'black',
	brand: 'BMW',
	seatCapacity: 4,
	// nested object
	owner: {
		firstName: 'David',
		phone: '0712345678',
		// special keys
		['full name']: 'David Kiptum',
	},
	previousOwners: ['Tony'],
};

const ruth = 'engine';

console.log(car[ruth]);

console.log(car.engine);
console.log(car['engine']);

// Accessing values inside an object
// 1. Dot notation (.) -> this is the most common
console.log(car.owner.firstName);

// 2. Square bracket notation ([]) -> Dynamically access values
// They also come in handy when dealing with special keys
console.log(car['owner']['firstName']);

console.log(car['owner']['full name']);

const student = {
	name: 'Brian Bett',
	age: 25,
	gender: 'Male',
	class: {
		cohort: 'SDF-FT13',
		name: 'Web 9',
		tm: {
			yearsOfExp: 2,
			name: 'John',
		},
		noOfStudents: 41,
		classModule: 'SD',
	},
};

console.log(student.class.tm.name);
console.log(student['class']['tm']['yearsOfExp']);

console.log(`${student.class.classModule}, ${student.class.tm.name}`);
console.log(student.class.classModule, student.class.tm.name);
// functions + recurssion

// add more properties
student.regNo = '123';
console.log(student);

// update properties
student.age = 30;
console.log(student.age);

// delete properties
delete student.age;
console.log(student.age);

// Objects methods
// 1. Object.keys() -> returns an array of object keys
console.log(Object.keys(student));

// 2. Object.values() -> returns an array of object values
console.log(Object.values(student));
