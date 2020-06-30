// sends the return string to the side until called upon
// at a later Date, if a variable for the function is declared


let returnToSender = () => {
    return 'not here';
}

let value = returnToSender();
console.log(value);

// concise body as an implicit (assumed return)

let what = () => returnToSender();

let hmmm = what();

console.log(hmmm);