const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedTotal = cart.reduce((total, item) => {
    let price = item.price;
    if (item.category === "electronics") price *= 0.9;
    else if (item.category === "fashion") price *= 0.95;
    return total + price;
}, 0);

if (discountedTotal > 50000) discountedTotal *= 0.95;

console.log(`Final Total: ₹${discountedTotal.toFixed(2)}`);
