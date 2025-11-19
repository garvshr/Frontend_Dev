"use strict";

const form5 = document.getElementById("ticketForm");
const name5 = document.getElementById("movieName");
const email5 = document.getElementById("movieEmail");
const seats5 = document.getElementById("movieSeats");
const ticketDiv = document.getElementById("ticket");

const setField = (input, errEl, msg) => {
  if (msg) {
    input.style.border = "2px solid red";
    errEl.textContent = msg;
  } else {
    input.style.border = "2px solid green";
    errEl.textContent = "";
  }
};

form5.addEventListener("submit", e => {
  e.preventDefault();
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const seatsErr = document.getElementById("seatsErr");

  let ok = true;

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name5.value.trim())) {
    setField(name5, nameErr, "Name must have alphabets only");
    ok = false;
  } else {
    setField(name5, nameErr, "");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email5.value.trim())) {
    setField(email5, emailErr, "Invalid email");
    ok = false;
  } else {
    setField(email5, emailErr, "");
  }

  const seatValue = seats5.value.trim();
  const seatsRegex = /^([1-9]|10)$/;
  if (!seatsRegex.test(seatValue)) {
    setField(seats5, seatsErr, "Seats must be between 1 and 10");
    ok = false;
  } else {
    setField(seats5, seatsErr, "");
  }

  if (!ok) {
    ticketDiv.style.display = "none";
    ticketDiv.textContent = "";
    return;
  }

  const booking = {
    name: name5.value.trim(),
    email: email5.value.trim(),
    seats: Number(seatValue)
  };

  ticketDiv.style.display = "block";
  ticketDiv.innerHTML = `
    <h3>Ticket Details</h3>
    <p>Name: ${booking.name}</p>
    <p>Email: ${booking.email}</p>
    <p>Seats: ${booking.seats}</p>
  `;
});
