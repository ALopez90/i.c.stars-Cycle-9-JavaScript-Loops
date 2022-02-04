// SECTION Homework
// 1. Write a while loop that prints out 10 integers and meets 2 conditions (use logical operator).
// 2. CHALLENGE: Write a while loop that uses an array and prints out only the first 2 elements in the array.
// !SECTION

// SECTION Table of Content:
// While Loops
// Do... While Loops
// Do It Yourself!
// !SECTION

// SECTION[id=while-loop]
// NOTE Description: The most simple looping statement in JavaScript! Loops through a chunk of code as long as the condition is true.

// NOTE Syntax:
let i = 0; // initializer

while (condition) {
    // code block
    i++; // iteration -- add 1 to the current value
}

// NOTE Example:
// True/Success
let j = 1; // initializer

while (j <= 5) { // condition
    console.log("Current number is " + j + "!");

    // j++; // iteration -- adds 1 to the current value
    j+=2; // iteration -- adds 2 to the current value
}

// False/Fail
// Fails because the condition was never true!
let k = 10; // initializer

while (k < 10) { // condition
    console.log("Current number is less than 10! " + k);

    k++; // iteration -- adds 1 to the current value
}


// !SECTION

/***************************/
// SECTION[id=do-while-loop]
// NOTE Description: Another version of the while loop, however it checks the condition at the end of each loop instead of the beginning. Also, it will always loop the chunk of code once before checking the condition. If it's true, it will continue looping.

// NOTE Syntax:

let l = 0; // initializer

do {
    // some code block
    l++; // iteration -- adds 1 to the current value
}
while (condition)


// NOTE Example:
// True/Success
let m = 1; // initializer

do {
    console.log("Something: " + m);

    m++; // iteration -- adds 1 to the current value
}
while (m <= 5); // condition

// False/Fails
let n = 6; // initializer

do {
    console.log("Number: " + n);

    n++; // iteration -- adds 1 to the current value
}
while (n <= 5); // condition

// !SECTION

/***************************/
// SECTION[id=while-diy]
// NOTE Do It Yourself!
// While
let Jakwoun = 20; // initializer

while (Jakwoun <= 40) { // condition
    console.log(Jakwoun + " gets a night off!")
    Jakwoun++; // iteration
}

// Do... While
// SUCCESS!
let numbers = 9; // initializer

do {
    console.log("Whatever " + numbers);
    numbers++; // iteration -- adds 1 to the current value
}
while (numbers < 18); // condition

// Do... While
// INFINITE LOOP. DONT RUN UNLESS YOU 
let numbers = 9; // initializer

do {
    console.log("Whatever " + numbers);
    numbers++; // iteration -- adds 1 to the current value
}
while (numbers >= 3); // condition
// !SECTION