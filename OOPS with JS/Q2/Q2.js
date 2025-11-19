const menu = [
    { name: 'pizza', price: 10 },
    { name: 'burger', price: 8 },
    { name: 'salad', price: 6 }
];
function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            const found = menu.find(m => m.name === item);
            if (!found) throw new Error(`Invalid item: ${item}`);
            return found.price;
        });
        const total = prices.reduce((sum, price) => sum + price, 0);
        return total;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
console.log(calculateBill(['pizza', 'burger'])); // 18
console.log(calculateBill(['pizza', 'taco'])); // Error: Invalid item: taco