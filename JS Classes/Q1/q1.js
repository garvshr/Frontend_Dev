"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    const discount = (this.price * percent) / 100;
    this.price = this.price - discount;
  }

  getDetails() {
    return `#${this.id} - ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 65000, "Electronics"),
  new Product(2, "Mouse", 750, "Electronics"),
  new Product(3, "Chair", 2200, "Furniture"),
  new Product(4, "Phone", 14000, "Electronics"),
  new Product(5, "Notebook", 80, "Stationery")
];

products[0].applyDiscount(10);
products[3].applyDiscount(5);

document.getElementById("showExpensive").addEventListener("click", () => {
  const filtered = products.filter(p => p.price > 1000);
  filtered.forEach(p => console.log(p.getDetails()));
});
