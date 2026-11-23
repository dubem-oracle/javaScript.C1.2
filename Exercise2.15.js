Exercise 2.15
const prompt = require("prompt-sync");
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));


let squareNumber1 = number1 * number1;
let squareNumber2 = number2 * number2;
let sum = squareNumber1 + squareNumber2;
let product = squareNumber1 * squareNumber2;
let difference = squareNumber1 - squareNumber2;

console.log("Sum is " + sum);
console.log("Product is " + product);
console.log("Difference is " + difference);


