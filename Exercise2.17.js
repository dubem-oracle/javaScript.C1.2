Exercise 2.17

const prompt = require(prompt-sync);
let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
let n3 = Number(prompt("Enter third number:"));

let sum = n1 + n2 + n3;
let average = sum / 3;
let product = n1 * n2 * n3;

let smallest = n1;
if (n2 < smallest) { smallest = n2; }
if (n3 < smallest) { smallest = n3; }

let largest = n1;
if (n2 > largest) { largest = n2; }
if (n3 > largest) { largest = n3; }

console.log("Sum is " + sum);
console.log("Average is " + average);
console.log("Product is " + product);
console.log("Smallest is " + smallest);
console.log("Largest is " + largest);
