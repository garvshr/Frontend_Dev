let delays = [3, 7, 12, 0, 9];
let totalFine = 0;
let delayedReturns = 0;

for (let i = 0; i < delays.length; i++) {
  let days = delays[i];
  let fine = 0;
  if (days > 0) delayedReturns++;
  if (days >= 1 && days <= 5) fine = days * 10;
  else if (days >= 6 && days <= 10) fine = days * 20;
  else if (days > 10) fine = days * 50;
  totalFine += fine;
}

if (delayedReturns > 3) totalFine += 200;

console.log("Total Fine: ₹" + totalFine);
console.log("Delayed Returns: " + delayedReturns);
