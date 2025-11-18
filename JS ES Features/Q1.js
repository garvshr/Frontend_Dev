"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }

    console.log(`Original: ${value}, Number: ${num}, Boolean: ${bool}, String: ${str}`);
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
