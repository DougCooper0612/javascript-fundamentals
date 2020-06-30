let num = 6;

// Ternary some (condition) ? (true) : (false)

(num > 0) 
? console.log('yes') 
: console.log('nah');

// exactly this below

if (num > 0) {
    console.log('yes');
}
else {
    console.log('nah');
}


// Ternary Challenge

let age = 17;

 (age >= 25 ) 
 ? console.log('Yay, you can rent a car!') 
 : (age >=21 ) 
 ? console.log('Hey, you can purchase Alchohol!') 
 : (age >18) 
 ? console.log('Hey, you can vote!')
 : console.log('Sorry bout it');
