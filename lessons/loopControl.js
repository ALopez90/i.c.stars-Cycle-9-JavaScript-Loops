// SECTION Homework
// 1. Write a loop that iterates through an array of animals! Print each animal BUT skip the loop if there's a "Tiger" in the array (ignore the rest of the loop).
// 2. Write a loop that iterates through the following array of objects:
// let users = [{
//     firstName: 'Jimmy',
//     lastName: 'John',
//     age: 34,
//     authRole: 'Admin'
// }, {
//     firstName: 'Henry',
//     lastName: 'Nguyen',
//     age: 65,
//     authRole: 'Admin'
// }, {
//     firstName: 'Khalil',
//     lastName: 'Hall',
//     age: 10,
//     authRole: 'Student'
// }, {
//     firstName: 'Papa',
//     lastName: 'Murphy',
//     age: 90,
//     authRole: 'Admin'
// }]
// Print the firstName of every user. Stop the loop completely if there's a user that's NOT an admin.
// CHALLENGE: Using what you know about ReactJS... create a small app that only has a text field requiring user input (style it as you want). Loop through that user's input and display to the user "Text is Valid" if the word "cupcake" does NOT exist in the user's input. If "cupcake" does exist, stop the loop and display to the user "Text is NOT Valid!!"
// !SECTION

// SECTION Table of Content:
// Continue
// Break
// !SECTION

/***************************/
// SECTION[id=continue]
// NOTE Description: It's a great way to skip the rest of the loop and restart the loop!

// NOTE Example:
// Example One done with integers.
for (let i = 0; i < 10; i++) {
    // some code
    // console.log(i);

    // Check if a certain number is met. If so, ignore it.
    if (i === 7) {
        continue;
    }
    else {
        console.log(i);
    }
}

// Example Two done with an array of numbers.
let numbers = [12, 3, 67, 54, 30];

for (let number of numbers) {

    // Check if the current number is divisible by 2.
    if (number % 2 === 0) {
        console.log(number + " is divisible by 2!");
    }
    else
    {
        console.log(number + " is NOT divisible by 2!");
        continue; // ignore rest of code
        console.log(number + " is NOT divisible by 2! But you can't see this because of the continue above :)");
    }
}

// Example Three! Loop through an array of strings. If the current string is _______, continue (meaning ignore the rest of the code), else print!

let juices = ["Apple", "Orange", "Grape", "Cranberry"];

// Method One with "For" loop
for (let z = 0; z < juices.length; z++) {
    if (juices[z] === "Grape") { // Check for "Grape"
        juices[z] = "cat"; // Change the value to 'cat'
        continue; // ignore the rest of the code
    } else {
        console.log(juices[z]); // print each item (ignores "Grape")
    }
}
console.log(juices);

// Method Two with "For...of" loop
for (let juice of juices) {
    if (juice === "Grape") {
        // continue; // skip the rest of the loop (ignore all code after this)
        juices[2] = "cat"; // Change value
        // juices[juice] = "cat"; // Added a key : value pair to the end of the array. Grape : 'cat'
        console.log(juices); // printing new array
    } else {
        console.log(juice);
    }
}

// !SECTION

/***************************/
// SECTION[id=break]
// NOTE Description: The best way to end the loop!

// NOTE Example:

// Example One done with an array of strings.
let clothes = ["Skirt", "Dress", "Pants", "Scarf", "Hat"];

for (let j = 0; j < clothes.length; j++) {
    let clothingItem = clothes[j]; // get the current element

    // Check for a specific clothing item. If it matches, change the value AND break out of the loop.
    if (clothingItem === "Pants") {
        clothes[j] = "Dog"; // Change the current value
        console.log(clothes); // What the array looks like after!
        break; // ends the loop
    } else {
        console.log("Current item: " + clothingItem);
    }
}

// Example Two done with integers.
for (let k = 0; k < 10; k++) {
    if (k == 6) {
        break;
    }
    else {
        console.log(k);
    }
}

// !SECTION
