"use strict";

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyCoupon(code) {
    const regex = /^(SAVE|DISC)(\d{1,2})$/;
    const match = code.toUpperCase().match(regex);
    if (!match) {
      return { valid: false, percent: 0 };
    }
    const percent = Number(match[2]);
    this.discountPercent = percent;
    return { valid: true, percent };
  }

  getFinalTotal() {
    const total = this.getTotal();
    if (!this.discountPercent) return total;
    const discount = (total * this.discountPercent) / 100;
    return total - discount;
  }
}

const cart = new Cart();

const itemForm = document.getElementById("itemForm");
const name9 = document.getElementById("itemName");
const price9 = document.getElementById("itemPrice");
const qty9 = document.getElementById("itemQty");
const itemsList = document.getElementById("itemsList");
const couponCode = document.getElementById("couponCode");
const couponMsg = document.getElementById("couponMsg");
const totalsDiv = document.getElementById("totals");
const applyBtn = document.getElementById("applyCouponBtn");

const renderItems = () => {
  itemsList.innerHTML = "";
  if (!cart.items.length) {
    itemsList.textContent = "No items in cart";
    totalsDiv.textContent = "";
    return;
  }
  cart.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${item.name} - ₹${item.price} x ${item.qty}`;
    itemsList.appendChild(div);
  });
  renderTotals();
};

const renderTotals = () => {
  const total = cart.getTotal();
  const finalTotal = cart.getFinalTotal();
  const discountText = cart.discountPercent
    ? `Discount: ${cart.discountPercent}%`
    : "No discount applied";
  totalsDiv.innerHTML = `
    <p>Total: ₹${total.toFixed(2)}</p>
    <p>${discountText}</p>
    <p>Final Total: ₹${finalTotal.toFixed(2)}</p>
  `;
};

itemForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = name9.value.trim();
  const price = Number(price9.value);
  const qty = Number(qty9.value);

  if (!name || price <= 0 || qty <= 0) {
    return;
  }

  cart.addItem(name, price, qty);
  name9.value = "";
  price9.value = "";
  qty9.value = "";
  renderItems();
});

applyBtn.addEventListener("click", () => {
  const code = couponCode.value.trim();
  if (!code) {
    couponMsg.textContent = "Enter a coupon code";
    couponMsg.style.color = "red";
    return;
  }
  const result = cart.applyCoupon(code);
  if (!result.valid) {
    couponMsg.textContent = "Invalid coupon format";
    couponMsg.style.color = "red";
    return;
  }
  couponMsg.textContent = `Coupon applied: ${result.percent}% off`;
  couponMsg.style.color = "green";
  renderTotals();
});
