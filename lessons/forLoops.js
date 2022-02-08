// SECTION Homework
// 1. Write a loop that iterates from 0 - 21. Check if the number is an odd or even number. If it's odd, print "[1] is very odd.". If it's even, print "[2] is even!".
// 2. CHALLENGE: Write a loop that iterates through an array with a mix of data types. Extract the elements of the array and create a new array depending on the data type. Print out the new arrays.
// Example:
// let someArr = [1, "hello", 34, "hi", true,"hola", 45, false]
// prints out:
// [1, 34, 45] (integers only)
// ["hello", "hi", "hola"] (strings only)
// [true, false] (booleans only)
// !SECTION

// SECTION Table of Content:
// For Loops
// For...In Loops
// For...Of Loops
// Do It Yourself!
// !SECTION

// initializer: starting value
// condition: "run this code if true" (return true/false)
// iteration: adds on to the initial value to continue the loop

// SECTION "For" Loop
// NOTE Description: The "for" loop is the most common loop that's used and is typically used to run a chunk of code a certain amount of times.

// NOTE Syntax:
for (initializer ; condition ; iteration) {
    // code block
}

// NOTE Example:
// initializer: let i = 0
// condition: i <= 5
// iteration: i++
for (let i = 0; i <= 5; i++) {
    console.log(i); //code block
}

let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let j = 0; j < shoppingList.length; j++) {
    console.log(shoppingList[j]);
}

// NOTE Method One: Print out only the items that start with "P"
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let k = 0; k < shoppingList.length; k++) {
    if (shoppingList[k][0] === "P") {
        console.log(shoppingList[k]);
    }
}

// NOTE Method Two: Print out only the items that start with "P"
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let l = 0; l < shoppingList.length; l++) {
    if (shoppingList[l].startsWith("P")) { // .startsWith works with strings only
        console.log(shoppingList[l]);
    }
}

// NOTE Method One: Print out only one specific item (Done with string matching)
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let m = 0; m < shoppingList.length; m++) {
    if (shoppingList[m] === "Tortilla") {
        console.log(shoppingList[m]);
    }
}

// NOTE Method Two: Print out only one specific item (Done with indexing)
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let n = 0; n < shoppingList.length; n++) {
    if (n == 4) {
        console.log(shoppingList[n]);
    }
}

// NOTE Do It Yourself -- Loop through an array of string elements of animals. Only print out the last 2 elements.

// Method One: Point to specific index
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey"];

for (let z = 0; z < zoo.length; z++) {
    console.log(zoo[3],zoo[4]);
}

// Method Two: Increased the value of the initializer
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey"];

for (let a = 3; a < zoo.length; a++) {
    console.log(zoo[a]);
}

// Method Three: Used slice -- Useful when you don't know the number of elements in an array.
// Prints a new array with only the last two elements. (does not permanently change the array)
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey", "Elephant"];
console.log(zoo.slice(-2));
console.log(zoo); // still the same after!

// !SECTION


// SECTION "For...In" Loop -- Works best with Objects
// NOTE Description: The "For... In" loop is used to iterate through the properties of an object or elements in an array. DO NOT USE THIS WITH AN ARRAY IF THE INDEX ORDER IS IMPORTANT!!!

// NOTE Syntax:
for (property in object) {
    // code block
}

for (element in array) {
    // code block
}

let someArray = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey", "Elephant"];
let someObject = {
    "name": "Giraffe",
    "type": "Mammal"
}
console.log(someObject); // Prints: { "name": "Giraffe", "type": "Mammal" }
console.log(someObject.name); // Prints: Giraffe

// NOTE Example:

// NOTE Object
let person = {
    "name": "Alexa", // key : value
    "age": 22,
    "gender": "Female"
}

for (let key in person) {
    console.log(key + " = " + person[key]);
}

// NOTE Array
let fruits = ["Mango", "Pineapple", "Banana", "Avocado", "Tomato", "Guava"];

for (let index in fruits) { // Same as doing: let index = 0; index < fruits.length; index++
    console.log(fruits[index]);
}

// NOTE Do It Yourself -- Loop through an array using the "For...In" loop. Have at least one condition (if/else).
let cars = ["Mercedes", "Toyota", "BMW", "Honda", "Kia"];

for (let car in cars) {
    // console.log(car); // current index (integer)
    // console.log(cars); // the array
    // console.log(cars[car]); // the current element (string)
    if (cars[car].startsWith("H")) {
        console.log(cars[car]);
    }
}
// !SECTION


// SECTION "For...Of" Loop -- Works best with Arrays
// NOTE Description: The "For...Of" loop allows for the iteration over arrays or strings and the chunk of code is executed for every element inside the array. THIS DOES NOT WORK WITH OBJECTS.

// NOTE Syntax:
for (element of someArray) {
    // code block
}

// NOTE Example:
let languages = ["Spanish", "Japanese", "French", "Hmong", "Russian"];

for (let element of languages) {
    console.log(element); // Prints: Spanish Japanese French Hmong Russian
}

let welcome = "Hello world!";

for (let letter of welcome) {
    console.log(letter); // Prints: H,e,l,l,o, ,W,o,r,l,d,!
}

// NOTE Do It Yourself (not done in class) -- Create a "For...Of" loop that prints out each letter in every element inside an array! Example: ["Spanish", "Japanese", "French"] >>> S,p,a,n,i,s,h,J,a,p,a,n,e,s,e,F,r,e,n,c,h

// !SECTION
