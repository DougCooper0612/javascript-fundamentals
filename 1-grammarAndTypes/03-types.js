// booleans represents something being true or false, period.  No other purpose.  write true or false in lower case
let isOn= true;

let isRaining = false;

// NULL = nothing

let empty = null;

// Undefined 

let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers

let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; // this is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; // this is 16 lines
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 + 10) / 10;
console.log(numbersAreHard);

/* casting */

let created = Number(123); //turn 123 into the number 123
console.log(created);

let abc = Number('z');
console.log(abc);  // forgiving to definitions that are not numbers.

// Strings
let stringOne = "doubleydoos";
let stringTwo = 'singleydoos'; // you can use single or double quotes to define a string

let first = 1050 + 100;  //strings convert numbers to characters, and 
let second = '150' + 100; // will combine them as 1050100 compared to adding as 250
let third = 1050 + '100';
let last = '1050' + 100;
console.log(first, second, third, last);

let firstName ="Doug";
let lastName = "Cooper";
console.log(firstName + " " + lastName);

//escape characters
let myMessage = '\\don\'t do this\\';
console.log(myMessage);


//Objects -- discover prototype system on my own, as it's the core language that makes rest work

let frodo = {
race: 'Hobbit',  //string
rings: 1,        //number  
cloak: true,     //booleon
primaryWeapon: { name: 'Sting', attack: 30, damage: false },
damage: 'poison',
hunger: 5
};

// trailing comas are designated tp add additional values within an object

console.log(typeof frodo);


//array is a variable link list, unlimited, various types can be combined

let grocreyList = 
['banana', 
'kiwi', 
'coconut',
'green chili',
'beer',
24,
];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];
//            Number  Object                       Array

console.log(aThing instanceof Array);


/* STRINGS: METHODS are used because we are the creatures of what goes from the user
to elsewhere for storage. then we need checks and balances to ensure they data
stored is accurate when dealing with end users that may be flawed, such as 
passwords that may be cause sensitive, while emails are not. */

//below example looks for ALL caps and if not converts, or scan words for true/false

let userTitle = "              a DaY in tHe LIfe of dev          ";
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'));

