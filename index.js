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
} else {
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


// Bonus

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida pellentesque libero ut pellentesque. Nunc viverra vel dui a aliquet. Donec ut mollis ante. Sed posuere mi nisi, cursus ultrices nisl bibendum fringilla. Aliquam ut rutrum purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum euismod metus a ante dapibus hendrerit. In placerat risus dolor, a malesuada urna suscipit id. Donec dapibus ipsum sed leo faucibus, id accumsan mauris consectetur. Pellentesque mattis vulputate efficitur.

Aliquam tincidunt leo eget augue blandit, vitae ultricies ipsum tincidunt. In sit amet viverra enim, non maximus orci. Cras tincidunt nisl enim, at pharetra lacus convallis ut. Suspendisse convallis turpis sit amet massa tincidunt sollicitudin eu sit amet arcu. Nulla eget tempor nisl, quis maximus dolor. Sed ornare magna ut leo dictum, at molestie justo mollis. Quisque quis tortor non nisi maximus tincidunt. Sed sed maximus leo. Nunc at lobortis urna.

Quisque at odio quam. Nulla vestibulum aliquam purus, quis molestie erat tempor lacinia. Cras at mollis lectus. Duis porttitor varius dui, id suscipit sapien blandit vitae. Nam congue semper diam, vel mollis massa tristique sit amet. Sed vel sem vitae erat congue euismod. Pellentesque ullamcorper rutrum elementum. Aliquam volutpat enim ac odio malesuada, et pharetra leo posuere. Aliquam elementum ante et lectus commodo, vitae tempor quam ultrices. Ut efficitur felis ut leo posuere, quis imperdiet mi dapibus. Pellentesque vehicula, lectus ac porttitor dictum, diam felis varius quam, in lobortis urna massa non eros. Nulla tristique augue vel mattis semper.`

let wordCount = 3;
for (let k = 0; k < longText.length; k++) {
    if (longText[k] === " ") {
        wordCount += 1;
    }
}
console.log(wordCount);

let etCount = 0
for (let l = 0; l < longText.length; l++) {
    if (longText[l] + longText[l + 1] + longText[l + 2] === " et") {
        etCount += 1;
    }
}
console.log(etCount);

