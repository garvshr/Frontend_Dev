let showTime = "evening"; 
let age = 65; 
let isStudent = false; 
let tickets = 4; 

let basePrice = showTime === "morning" ? 120 : 180;
let total = basePrice * tickets;

let discount = 0;
if (isStudent) discount = 0.1;
else if (age > 60) discount = 0.2;

let discountedTotal = total * (1 - discount);
let serviceFee = tickets > 3 ? 50 : 0;
let finalAmount = discountedTotal + serviceFee;

console.log("Base Price: ₹" + total);
console.log("Discounted Total: ₹" + discountedTotal.toFixed(2));
console.log("Final Amount (after service fee): ₹" + finalAmount.toFixed(2));
