// Sample exercise ---- Arrays using map method ---
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// --------------------- Exercise 1 ---------------------
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Expected output: [26, 174, 4, 178, 24, 8, 180, 126]
// Your code here
const newNums = nums.map((num) => {
    return num * 2;
});

console.log(newNums); // [26, 174, 4, 178, 24, 8, 180, 126]

// --------------------- Exercise 2 ---------------------
// Array Destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [fistTopping, secondTopping] = pizzaToppings;
console.log(fistTopping); // Pineapple
console.log(secondTopping); // Olives

// Equivalent in traditional bracket notation
console.log(pizzaToppings[0]); // Pineapple
console.log(pizzaToppings[1]); // Olives

// --------------------- Exercise 3 ---------------------
// Object Destructuring
// Given the following object, use destructuring to pull out the first and last values and place them into variables. Log both variables.

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
 const {make, model} = car; 

console.log(make); // Audi
console.log(model); // q5

// --------------------- Exercise 4 ---------------------
// Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const mypizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...mypizzaToppings];
console.log(controversialPizzaToppings); // [Pineapple, Olives, Anchovies]

// --------------------- Exercise 5 ---------------------
// Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.

const carTwo = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...carTwo, model: 'q7'};
  console.log(carTwo); // {make: 'Audi', model: 'q5'}
  console.log(myCar); // {make: 'Audi', model: 'q7'}

// --------------------- Exercise 6 ---------------------
// Dynamic keys in objects

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'username';
const userProfile = {[propertyName]: 'Alex'};
console.log(userProfile); // {username: 'Alex'}

// --------------------- Exercise 7 ---------------------
// Import and Export e.g.
// export default 'Matt';
// export const age = 43;
// export const job = 'programmer';

 // ------imported by updating importingFile.js like so:
// import name, { age, job } from './exportingFile.js';
// console.log(name, age, job);

// --------------------- Exercise 8 ---------------------
// Default parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const defaultParams = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}.`);
};
defaultParams(); // The cat is white.
defaultParams('dog', 'black'); // The dog is black.

// --------------------- Exercise 9 ---------------------
// The ternary operator
// Consider the following example using an if...else statement:

const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'

// Convert the following `if...else` statement in to a ternary:

let pizzaExample = 'tasty';

if (pizzaExample === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let pizza = 'tasty';

let ternaryOp = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(ternaryOp); // 'yum'

// --------------------- Exercise 10 ---------------------
// Boolean gates
const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1); // 'foo'
console.log('result2:', result2); // 243
console.log('result3:', result3); // false
console.log('result4:', result4); // 3000


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. 
// This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG); // en


// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME); // light

// --------------------- Exercise 11 ---------------------
// Optional chaining
// Now check for `cat.age` on `adventurer`. See how it errors out? 
// Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?name;

console.log(cat); // undefined
