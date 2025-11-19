const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, stock: 5 },
    { id: 2, name: 'Book', category: 'Books', price: 20, stock: 50 },
    { id: 3, name: 'Phone', category: 'Electronics', price: 500, stock: 10 },
    { id: 4, name: 'Novel', category: 'Books', price: 15, stock: 100 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 100, stock: 3 }
];
function getLowStockProducts() {
    return products.filter(p => p.stock < 10);
}
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}
function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + (p.price * p.stock), 0);
}
function groupByCategory() {
    return products.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});
}
console.log('Low Stock:', getLowStockProducts());
console.log('Sorted by Price:', sortProductsByPrice());
console.log('Total Value:', calculateTotalInventoryValue());
console.log('Grouped:', groupByCategory());