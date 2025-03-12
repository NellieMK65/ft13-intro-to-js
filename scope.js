// scope -> mostly comes into play when dealing with variables
// global scope and local scope
// when you introduce things like functions, if/switch/while and many other statements
// with a body, they create a local scope

let firstName = 'James';

// in this function, a local scope is created where we are able to even reuse variable names
// that are already used in the global scope
function lunch(firstName) {
	// when dealing with parameters, js auto assigns them the let keyword, which means
	// we can reassign but not redeclare the same variable inside the function
	console.log(firstName);
	firstName = 'Mufasa';

	if (true) {
		// var doesn`t respect the scope principle which means it exposes local variables
		// to the outer scope
		var lastName = 'Kuria';
		console.log(lastName);
	}

	console.log(lastName);
	// we can be able to access global variables inside local scopes
	// variables inside the local scope are usually prioritized before global scope
	console.log(`${firstName} is preparing some lunch`);
}

console.log(firstName);

lunch();

console.log(firstName);

// TODO -> Lexical scoping (to be covered when doing things practically)
