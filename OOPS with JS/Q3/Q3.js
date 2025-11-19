function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.applyDiscount = function(percent) {
    return this.price * (1 - percent / 100);
};
const prod1 = new Product('Laptop', 1000);
const prod2 = new Product('Phone', 500);
const prod3 = new Product('Tablet', 300);
console.log(prod1.applyDiscount(10)); // 900
console.log(prod2.applyDiscount(20)); // 400
console.log(prod3.applyDiscount(15)); // 255
console.log('Abstraction via prototype simplifies applying discounts to all products.');