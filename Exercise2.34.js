Exercise 2.34

const prompt = require(prompt-sync);
let population = Number(prompt("Enter current world population:"));
let ratePercent = Number(prompt("Enter annual growth rate (%):"));
let rate = ratePercent / 100;

let year1 = population * (1 + rate);
let year2 = year1 * (1 + rate);
let year3 = year2 * (1 + rate);
let year4 = year3 * (1 + rate);
let year5 = year4 * (1 + rate);

console.log("After 1 year:  " + year1);
console.log("After 2 years: " + year2);
console.log("After 3 years: " + year3);
console.log("After 4 years: " + year4);
console.log("After 5 years: " + year5);
