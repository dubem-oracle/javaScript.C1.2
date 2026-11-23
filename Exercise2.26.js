Exercise 2.26

const prompt = require(prompt-sync);
let first = Number(prompt("Enter first integer:"));
let second = Number(prompt("Enter second integer:"));

if (second != 0) {
  if (first % second == 0) {
    console.log(first + " is a multiple of " + second);
  }
  if (first % second != 0) {
    console.log(first + " is not a multiple of " + second);
  }
}
if (second == 0) {
  console.log("Cannot check multiples with zero");
}
