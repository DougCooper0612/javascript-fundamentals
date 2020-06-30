/*

function hi() {
    console.log('Ayo');
}

hi(); //would display Ayo
hi;   //would display "function hi()" acknowleding a function

*/

/* let numbers = functionNumbers() {
for (numbers = 1; numbers <= 10; numbers++){
    console.log(numbers);
}
numbers(); */

// expresions are not hoisted but declarations are --
// research more for better undertanding doug!!

let printNumbers = function potato () {
    for (let i = 1; i<10; i++) {
// for loop above, within () is "controller", i++ modifcation
// spot tells the loop where to stop.
console.log(i);
    } 
}
//files global scope, scope also in function, for loop scope
//also in function

printNumbers();

console.log(printNumbers);

// IIFE 
(function () { console.log('Why is this working')})();

