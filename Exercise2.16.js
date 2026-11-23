Exercise 2.16

const prompt = require("prompt-sync");
let number1 = Number(prompt("Enter first integer:"));
let number2 = Number(prompt("Enter second integer:"));

if (number1 > number2) {
  console.log(number1 + " is larger");
}
if (number2 > number1) {
  console.log(number2 + " is larger");
}
if (number1 == number2) {
  console.log("These numbers are equal");
}
