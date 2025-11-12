function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let coupon = Math.floor(Math.random() * 100) + 1;
let message = "";

if (coupon <= 30) message = "You won a 10% discount";
else if (coupon <= 60) message = "You won a 20% discount";
else if (coupon <= 90) message = "You won a 30% discount";
else message = "You won a 50% Mega Offer!";

console.log("Coupon Number: " + coupon);
console.log(message);

if (isPrime(coupon)) console.log("Prime number bonus applied");
