// Section 1: Basic Rules and Data Types
// Exercise 1: Formatting and Naming
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("1: The variable is 10.");
}

// Exercise 2: Defining Core Data Types
let helloWorld = `Hello, World!`;
let itemPrice = 9.99;
let trueFalse = true;
console.log("2:", helloWorld, itemPrice, trueFalse);

// Exercise 3: Single-Line Comments
// Stores the user's current grade in class
let currentGrade = 99;
console.log("3: Current score is", currentScore);

// Exercise 4: Equality Comparison
console.log("4: (==):", '100' == 100);   
console.log("4: (===):", '100' === 100); 

// Section 2: Conditionals and Control Flow
// Exercise 5: Ternary Operator
let isTheWeekend = false;
let schedule;
schedule = isTheWeekend ? "Day off" : "Work day";
console.log("5: ", schedule);

// Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
  console.log("6: Adult");
} else {
  console.log("6: Kid");
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("7: permission granted");
}

// Exercise 8: For Loop
for (let iteration = 1; iteration <= 5; iteration++) {
  console.log("8: iteration complete", iteration);
}

// Exercise 9: Loop Control
for (let number = 0; number <= 9; number++) {
  if (number === 7) {
    break;
  }
  console.log("9: done", number);
}

// Exercise 10: Ensuring Execution
let counter = 10;
do {
  console.log("10: running once");
} while (counter < 10);

// Section 3: Functions and Data Structures
// Exercise 11: Function Definition
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("11: area is", resultArea);

// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log("12: Banana index is", fruitList.indexOf('Banana'));
console.log("12: Updated fruit list is", fruitList);

// Exercise 13: Array Copying
let originalData = [10, 20, 30];
let clonedData = originalData.slice();
console.log("13: Original data is", originalData);
console.log("13: Cloned data is", clonedData);
/* slice() returns a shallow copy of the array into new array without modifying 
   the original array */

// Exercise 14: Object Constructor
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log("15: animal array is", animalArray);
