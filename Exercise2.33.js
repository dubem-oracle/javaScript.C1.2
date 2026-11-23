Exercise 2.33

const prompt = require(prompt-sync);
let weight = Number(prompt("Enter weight in pounds:"));
let height = Number(prompt("Enter height in inches:"));

let bmi = (weight * 703) / (height * height);
console.log("Your BMI is " + bmi);

console.log("BMI VALUES");
console.log("Underweight: less than 18.5");
console.log("Normal:      18.5 to 24.9");
console.log("Overweight:  25 to 29.9");
console.log("Obese:       30 or greater");

if (bmi < 18.5) {
  console.log("Category: Underweight");
}
if (bmi >= 18.5) {
  if (bmi < 25) {
    console.log("Category: Normal");
  }
}
if (bmi >= 25) {
  if (bmi < 30) {
    console.log("Category: Overweight");
  }
}
if (bmi >= 30) {
  console.log("Category: Obese");
}
