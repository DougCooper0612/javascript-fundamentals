// the value will be the key that the element resides in

let student = {
    name: "Gloria",
    awesome: true,
    specialty: "Javascript",
    week: 1
};

console.log(student.name);
console.log(student['awesome']);

for ( x in student ){
    console.log(student[x]);
}

console.log(typeof student)


//for in loop
// student is an object
// words are strings
// numbers are numbers
// true/false are false
// all can and or are "keys" within student.


