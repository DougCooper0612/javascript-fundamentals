// NEW ES6 functionality
// fat arrow function is a shortcut to avoid writing 
// traditional words "function"
let fatArrow = () => {
console.log('I reside in the new way of writing functions')
}

//invoke function

fatArrow();

// Concise body only allows a single statement in the function of body;

let conciseBody = () => console.log('I am concise');

conciseBody();

// Block body allows for multiple line statements;
// by adding curly symbols, where as concise body can 
// only have one statement if you don't use curly 
// brackets
// the name "blockBody or concise can be anything as
// they are declaring a function.  To use either, they
// must have an expression, such as let or cont.

let blockBody = () => {
let y = 0;
y += 4;
console.log(y);
}

blockBody();

