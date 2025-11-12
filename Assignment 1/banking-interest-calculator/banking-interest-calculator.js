let accountType = "fixed"; 
let amount = 120000; 
let years = 5; 

let rate = 0;

if (accountType === "savings") {
  rate = 4;
} else if (accountType === "fixed") {
  rate = 6.5;
}

if (amount > 100000) {
  rate += 1;
}

let total = amount * Math.pow((1 + rate / 100), years);
console.log("Final Balance after " + years + " years: ₹" + total.toFixed(2));
