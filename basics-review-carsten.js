// # Review 1 - basics

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Make a variable and assign an even number to that variable. Make sure that variable cannot be changed.
const varOne = 2;

// 2. Make a variable and assign a negative odd number to that variable. Make sure that variable cannot be changed.
const varTwo = -3;

// 3. Make a variable and assign a string to that variable using double quotes. Make sure that variable cannot be changed.
const stringOne = "This is a string";

// 4. Make a variable and assign a string to that variable using single quotes. Make sure that variable cannot be changed.
const stringTwo = "This is also a string";

// 5. Make a variable and assign a string to that variable using a template literal. Make sure that variable cannot be changed.
const stringThree = `This is a string with the variable ${varOne}`;

// 6. Make a variable and assign an empty string to that variable using a template literal. Make sure that variable *can* be changed.
let varThree = 3;
const stringFour = `This is a tamplate literal with the variable ${varThree}`;

// 7. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable *can* be changed.
let varFive = true;
const stringSix = `This is ${varFive}`;

// 8. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable can not be changed.
const varSix = false;
const stringSeven = `No, that is ${varSix}`;

// 9. Print the `type` of a variable that has a number value.
let varSeven = 7;
console.log(typeof varSeven);

// 10. Print the `type` of a variable that has a string value.
let varEight = "String";
console.log(typeof varEight);

// 11. Print the `type` of a variable that has a boolean value.
let varNine = true;
console.log(typeof varNine);
