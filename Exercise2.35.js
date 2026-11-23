Exercise 2.35

const prompt = require(prompt-sync);
let milesPerDay = Number(prompt("Enter total miles driven per day:"));
let costPerGallon = Number(prompt("Enter cost per gallon of gasoline:"));
let milesPerGallon = Number(prompt("Enter average miles per gallon:"));
let parkingFees = Number(prompt("Enter parking fees per day:"));
let tolls = Number(prompt("Enter tolls per day:"));

let fuelCost = (milesPerDay / milesPerGallon) * costPerGallon);
let dailyCost = fuelCost + parkingFees + tolls;

console.log("Daily driving cost: " + dailyCost);
