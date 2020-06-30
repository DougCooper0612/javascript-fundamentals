
let greeting = function (name) {
    console.log(`Hello, ${ name }!`);

}
greeting('Becky');  //name:  an argument is what you 
//throw into a parameter (name) in this example.
//positional argument is its tecnical name.
//An argument is when the function is called.

let printMyName = function(fName, lName){
let fullName = fName + " " + lName; //string concatination string with words
console.log(`Hello my name is ${fullName}.`) //back ticks call string interpolation
}
printMyName('Doug', 'Cooper')


/* function using ofloop */

let calculateBalance = function (debits, credits) {
      let total = 0;
      for (debit of debits) {
          total -= debit;
    }
        for (credit of credits) {
            total += credit;
        }
        console.log(total);
    }
let mydeb = [150.00, 34.00, 23.98] 
let mycred = [1000.00, 50.00, 25.00]

calculateBalance(mydeb, mycred);

