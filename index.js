// Iteration 1: Names and Input
const hacker1 = 'Thomas'
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Michael';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
    else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }    else {
            console.log(`Wow, you both have equally long names, ${hacker1.length} ccharacters!`);
        }

// Iteration 3: Loops

let newName1 = '';

for (let i = 0; i < hacker1.length; i++) {
    newName1 += hacker1[i].toUpperCase() + ' ';
}     
console.log(newName1);

let newName2 = '';
for (let j = hacker2.length - 1; j >= 0; j--) {
    newName2 += hacker2[j];
}
console.log(newName2);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
}
else if (hacker2 < hacker1) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log("What?! You both have the same name?");
}

