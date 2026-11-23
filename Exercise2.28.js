Exercise 2.28

const prompt = require(prompt-sync);
let radius = Number(prompt("Enter radius as an integer:"));
pi = 3.14159;

let diameter = 2 * radius;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

console.log("Diameter is " + diameter);
console.log("Circumference is " + circumference);
console.log("Area is " + area);
