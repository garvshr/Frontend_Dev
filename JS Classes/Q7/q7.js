"use strict";

const loginForm = document.getElementById("loginForm");
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const loginMsg = document.getElementById("loginMsg");

const setFieldStatus = (input, err, msg) => {
  if (msg) {
    input.style.border = "2px solid red";
    err.textContent = msg;
  } else {
    input.style.border = "2px solid green";
    err.textContent = "";
  }
};

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const userErr = document.getElementById("userErr");
  const passErr = document.getElementById("passErr");
  let ok = true;

  const userRegex = /^.{5,}$/;
  if (!userRegex.test(loginUser.value.trim())) {
    setFieldStatus(loginUser, userErr, "Username must be at least 5 characters");
    ok = false;
  } else {
    setFieldStatus(loginUser, userErr, "");
  }

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  if (!passRegex.test(loginPass.value)) {
    setFieldStatus(
      loginPass,
      passErr,
      "Password must have 8 chars, number, upper, lower, special char"
    );
    ok = false;
  } else {
    setFieldStatus(loginPass, passErr, "");
  }

  if (ok) {
    loginMsg.style.color = "green";
    loginMsg.textContent = "Login successful";
  } else {
    loginMsg.style.color = "red";
    loginMsg.textContent = "Please fix the errors above";
  }
});
