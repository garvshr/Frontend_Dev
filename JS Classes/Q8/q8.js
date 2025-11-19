"use strict";

const user = {
  name: "Akash",
  email: "akash@mail.com",
  age: 21
};

const form8 = document.getElementById("userForm");
const name8 = document.getElementById("userName");
const email8 = document.getElementById("userEmail");
const age8 = document.getElementById("userAge");
const display8 = document.getElementById("userDisplay");

const renderUser = () => {
  display8.textContent = JSON.stringify(user, null, 2);
};

name8.value = user.name;
email8.value = user.email;
age8.value = user.age;

renderUser();

form8.addEventListener("submit", e => {
  e.preventDefault();
  user.name = name8.value.trim();
  user.email = email8.value.trim();
  user.age = Number(age8.value);
  renderUser();
});
