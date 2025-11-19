"use strict";

const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const formMsg = document.getElementById("formMsg");

const setStatus = (input, errorElement, msg) => {
  if (msg) {
    input.style.border = "2px solid red";
    errorElement.textContent = msg;
  } else {
    input.style.border = "2px solid green";
    errorElement.textContent = "";
  }
};

form.addEventListener("submit", e => {
  e.preventDefault();
  formMsg.textContent = "";
  formMsg.className = "";

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(nameInput.value.trim())) {
    setStatus(nameInput, nameError, "Name should contain only alphabets");
    isValid = false;
  } else {
    setStatus(nameInput, nameError, "");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    setStatus(emailInput, emailError, "Enter a valid email");
    isValid = false;
  } else {
    setStatus(emailInput, emailError, "");
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    setStatus(phoneInput, phoneError, "Phone must be exactly 10 digits");
    isValid = false;
  } else {
    setStatus(phoneInput, phoneError, "");
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    setStatus(passwordInput, passwordError, "Password must have 1 uppercase, 1 number, 1 special character");
    isValid = false;
  } else {
    setStatus(passwordInput, passwordError, "");
  }

  if (isValid) {
    formMsg.textContent = "Registration successful";
    formMsg.className = "success";
  } else {
    formMsg.textContent = "Please fix the errors above";
    formMsg.className = "";
  }
});
