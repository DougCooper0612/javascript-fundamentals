let coffee = ['espresso,', 'nitro cold brew', 'cappuccino', 'americano', 'cappuccino', 'frappuccino'];

// read the second function within an array

console.log(coffee[2]);
let verybest = coffee.pop();
console.log(verybest);

// pop looks at elements within an array as a string and returns it,  minus th last
// element.

console.log(coffee);  // again as written will display the entire array as a string for trouble shooting

//push is a procedure that can add things to the end of an array function.

coffee.push('Latte', 'decaf');
console.log(coffee);

//data structures
//stack and queue -> stack means last in, first out -> a Queue is like standing
//in line, it's a specific order.
//the reason to know these is pointless in JAVA but to level up/down to 
//a different coding language as 

//POP and PUSH can be used to empliment a stack

//Stacok in last in first out.
//array.pop();
//array.push(<item>)
// Queue first in first out.  whomever is in front of the lin
// Array.shift();
// Array.unshift(<item>);
// Shift and POP methods are strict methods that do as notes indicate above.
// they do not allow pulling out items or adding items inbetween.
let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

// instant unshift would allow you to add someone to the front of the line.

coffee.unshift('instant', 'drip');
console.log(coffee);

// the items witin the () for a function are POSITIONAL ARGUMENTS.  

//search for a specific INDEX (type of coffee)
// as console.logged below it will display the first cappuccino in the string
console.log(coffee.indexOf('cappuccino'));

//how we can find every INDEX of cappuccino

console.log(coffee.indexOf('cappuccino', 4));

//how to find index of ALL cappuccino

coffee.forEach((c) => console.log(c));