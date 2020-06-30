let i = 7

// A for loop deals with things in order 
// for loop controler ie ( 1; 2; 3; ) position 1 holds variable declaration and/or initialization
// position2: condition to run the loop (needs to be true)
// poss3: incrementation or some kind of change that will trigger an evetual valse

for (i = 0; i <10; i++) {
    console.log('nice');
}

//control C will kill an infinite loop

// challenge: using a for loop, console log from 0 to 20 counting by 2's


for (i = 0; i <=20; i = i+2){
    console.log(i);
}

for (let z = 10; z >= 0; z--){
    console.log(z);
}

let name = "DougCooperRocksButIsNewToJavaAndMyBrainIsTired";
let dCharacter = name [45];
console.log(dCharacter);
//[name.length-1]; after let dcharacter = name to determine name length

let myName = "Doug"
for (let eCharacter = 0; eCharacter < myName.length; eCharacter ++) {
    console.log(myName[eCharacter]);
}

// short hand for the above function.   The let me of myName performs all of the math above
for (let m of myName) {
    console.log(m);
}

