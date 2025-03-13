// Array iteration - > running a statement once for each element

// Repetition -> while
let count = 0;
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Tue', 'Wed'];
console.log(days.length);
console.log(days[2]);
console.log(days[count]);

while (count < days.length) {
	console.log(count);

	console.log(count);
	console.log(days[count]);
	count++;
	// count  = count + 1
}

console.log(count);

// the for loop was born
for (let count = 0; count < days.length; count++) {
	console.log(count);
	console.log(days[count]);
}

const user = {
	age: 30,
	lastName: 'Doe',
};

for (const key in user) {
	console.log(user[key]);
}

// for...of iterate through an array
// this cannot give you the index of the elements
for (const day of days) {
	console.log(day);
}

// 1. indexOf() -> finds the position(index) of a given element or returns -1 if not found
const positionOfThur = days.indexOf('Thur');
console.log(positionOfThur);

// 2. find() -> returns the first element in an array that meets a given condition
const day = days.find(function (day, index) {
	if (index == 2) {
		return day;
	}
});

console.log(day);

const scores = [34, 59, 63, 87, 54];
let newScore = null;
const scoresAbove50 = [];
for (let i = 0; i < scores.length; i++) {
	const score = scores[i];
	if (score > 60) {
		scoresAbove50.push(score);
	}
	// if (score > 60) {
	//     console.log(score)
	//     newScore = score
	//     break; // this keyword stops execution of our loop
	// }
}
console.log(scoresAbove50);
console.log(newScore);

const scoreAbove60 = scores.find((score, index) => {
	if (score > 60) {
		return score;
	}
});
console.log(scoreAbove60);

function filterScoreAbove80(x) {
	if (x > 80) {
		return x;
	}
}
const scoreAbove80 = scores.find(filterScoreAbove80);
console.log(scoreAbove80);

// filter() -> finds and returns a list of elements that meet a given condition
const scoresAbove60 = scores.filter((score, index) => {
	if (score >= 50 && score <= 70) {
		return score;
	}
});
console.log(scores);
console.log(scoresAbove60);

// .map() -> iterate over the array while running a modifying function and
// returns the modified array
const students = ['ian', 'daud', 'eugene'];
const name = 'ian';

console.log(name.replace('i', 'I'));

function capitalizeName(arif) {
	return arif.replace(arif.charAt(0), arif.charAt(0).toUpperCase());
	return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(capitalizeName('ian'));
console.log(capitalizeName('eugene'));

const modifiedStudents = students.map((student) => student.toUpperCase());
console.log(students);
console.log(modifiedStudents);
console.log(students.map(capitalizeName));

const newStudents = [
	{ id: 1, name: 'shaban' },
	{ id: 2, name: 'vincent' },
	{ id: 3, name: 'john' },
];

const modifiedNewStudent = newStudents.map((studentName) =>
	studentName.name.toUpperCase()
);
console.log(modifiedNewStudent);

const student1 = { id: 1, name: 'Shaban', id: 3 };
console.log(student1);
const copyOfStudent = { ...student1, name: 'Robert' };
console.log(copyOfStudent);

const modifiedNewStudents = newStudents.map((student, index) => {
	// return { id: student.id, name: student.name.toUpperCase() }
	return { ...student, name: capitalizeName(student.name) };
});
console.log(modifiedNewStudents);

const numbers = [1, 2, 3, 4, 5, 34, 53, 3, 44, 23];
console.log(numbers.map((number) => number.toFixed(2)));

// reduce() -> create an aggregate
const sumOfNumbers = numbers.reduce((prev, curr) => {
	console.log(prev);
	console.log(curr);
	return prev + curr;
}, 0);

const largestNum = numbers.reduce((prev, curr, index) => {
	console.log(prev);
	console.log(curr);

	return prev > curr ? prev : curr;
}, 0);
console.log(largestNum);

//! Assignment - get the smallest number in an array of numbers using the reduce method
const smallestNumberz = numbers.reduce(
	(prev, curr) => (prev < curr ? prev : curr),
	1
);
console.log(smallestNumberz);

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log(Math.floor(34.23));
console.log(Math.round(34.56));

console.log(sumOfNumbers);

// forEach - iterates
students.forEach((student, index) => {
	console.log(index);
	console.log(student);
});

// reverse
console.log([1, 2, 3].reverse());

// sort, split + join
console.log(typeof students);

// verify you are working with an array
console.log(Array.isArray([]));
