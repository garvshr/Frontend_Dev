let orderAmount = 450;
let isPremium = false;
let isRemote = true;

let deliveryFee = 0;
let deliveryTime = 3;

if (orderAmount < 500 && !isPremium) {
  deliveryFee = 50;
}

if (isRemote) {
  deliveryTime += 2;
}

let totalCost = orderAmount + deliveryFee;

console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time: " + deliveryTime + " days");
