// HW 4: JavaScript Foundations
// Name: Angela Ho
// Each exercise is labeled. Run this file with Node.js or in a browser console.

// Section 1: Basic Rules and Data Types

// Exercise 1: Formatting and Naming
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("Exercise 1: The variable is 10.");
}

// Exercise 2: Defining Core Data Types
let greetingMessage = `Hello, JavaScript!`;
let itemPrice = 19.99;
let isJavaScriptFun = true;
console.log("Exercise 2:", greetingMessage, itemPrice, isJavaScriptFun);

// Exercise 3: Single-Line Comments
// Stores the user's current score in the assignment.
let currentScore = 95;
console.log("Exercise 3: Current score is", currentScore);

// Exercise 4: Equality Comparison
console.log("Exercise 4 (==):", '100' == 100);   // true: values compare equal after type conversion
console.log("Exercise 4 (===):", '100' === 100); // false: the types are different

// Section 2: Conditionals and Control Flow

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log("Exercise 5:", schedule);

// Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
  console.log("Exercise 6: Access Granted");
} else {
  console.log("Exercise 6: Access Denied");
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Exercise 7: Ready to process");
}

// Exercise 8: For Loop
for (let iteration = 1; iteration <= 5; iteration++) {
  console.log("Exercise 8: Iteration", iteration);
}

// Exercise 9: Loop Control
for (let number = 0; number <= 9; number++) {
  if (number === 7) {
    break;
  }
  console.log("Exercise 9:", number);
}

// Exercise 10: Ensuring Execution
let counter = 10;
do {
  console.log("Exercise 10: Running once");
} while (counter < 10);

// Section 3: Functions and Data Structures

// Exercise 11: Function Definition
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("Exercise 11: Area is", resultArea);

// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log("Exercise 12: Banana index is", fruitList.indexOf('Banana'));
console.log("Exercise 12: Updated fruit list is", fruitList);

// Exercise 13: Array Copying
let originalData = [10, 20, 30];
let clonedData = originalData.slice();
console.log("Exercise 13: Original data is", originalData);
console.log("Exercise 13: Cloned data is", clonedData);
// slice() makes a shallow copy: the arrays are separate, but nested objects or
// arrays inside them are still shared references. Copy nested data separately
// if you need those inner values to be independent too.

// Exercise 14: Object Constructor
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log("Exercise 15: Animal array is", animalArray);
