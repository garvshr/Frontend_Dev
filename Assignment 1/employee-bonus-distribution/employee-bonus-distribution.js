let baseSalary = 120000;
let rating = 5;
let experience = 6;

let bonusPercent = 0;

if (rating === 5) bonusPercent = 20;
else if (rating === 4) bonusPercent = 15;
else if (rating === 3) bonusPercent = 10;
else bonusPercent = 0;

if (experience > 5) bonusPercent += 5;

let bonus = (bonusPercent / 100) * baseSalary;
if (baseSalary > 100000 && bonus > 25000) bonus = 25000;

let totalSalary = baseSalary + bonus;

console.log("Calculated Bonus: ₹" + ((bonusPercent / 100) * baseSalary).toFixed(2));
console.log("Final Bonus (after cap): ₹" + bonus.toFixed(2));
console.log("Total Salary after Bonus: ₹" + totalSalary.toFixed(2));
