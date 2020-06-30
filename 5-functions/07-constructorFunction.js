
// object literal

/* let person1 = {
    name: 'Macy',
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 40,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

function createPerson (name, age, canVote){
    let person = {
        name: name,
        age: age,
        canVote, canVote
    }
    return person;
} */

// restrictor function makes above easier 'this' and 'new' are new to functions
// person is the object, envoked by macy, 23, true
// the word new is a class with an emplied constructor
// opjects are not ordered so can't bracket
// up not create a variable that start with numbers in a string.
// you can not create a key with a combination of numbers and characters.
// unless console.logged with bracket quoations [""]
// the new keyword envokes  objects only if the this function is within the 
// restricter function.

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => `Hello, my name is ${ this.name }`;

}

//array object contructor function.
// when using a construction function, THIS, console logged will return the entire object for trouble
//shooting.  However when you define the object using LET, console log will output the data types only 
// assigned by LET, such as Name:  Macy.

function array(item1, item2, item3.....) {
    this.items = {
        0: item1,
        1: item2,
        2: item3
    }
}

let myList = [1, 2, 3];



// Instances (single occurance of something) of a Person object 
// positional argument pulls the proper instance within an object (name,age, etc..) 
// below is how to pull positional arguments from Person.

let macyJones = new Person('Macy', 24);
let seth = new Person ('Seth', 54);
let troy = new Person ('Troy', 12);

console.log(seth.greeting())
// when console logging keys in a specific order you want, each first initiated
// key will become the next key it tries to look up.  So macyJones.age.canVote
// does not work because instead of java looking for MacyJones, it will look for
// the key 24 (the output from key age).  Therefore comas must be used in console log
// such as macyJones.age, macyJones.canVote in order to pull specific keys.
// 
