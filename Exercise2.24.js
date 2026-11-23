Exercise 24


const prompt = require(prompt-sync);
let a = Number(prompt("Enter integer 1:"));
let b = Number(prompt("Enter integer 2:"));
let c = Number(prompt("Enter integer 3:"));
let d = Number(prompt("Enter integer 4:"));
let e = Number(prompt("Enter integer 5:"));

let smallest = a;
if (b < smallest) { smallest = b; }
if (c < smallest) { smallest = c; }
if (d < smallest) { smallest = d; }
if (e < smallest) { smallest = e; }

let largest = a;
if (b > largest) { largest = b; }
if (c > largest) { largest = c; }
if (d > largest) { largest = d; }
if (e > largest) { largest = e; }

console.log("Smallest is " + smallest);
console.log("Largest is " + largest);
