"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return true;
    }
    return false;
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      return true;
    }
    return false;
  }
}

const books = [
  new Book("JavaScript Basics", "Sam", "101"),
  new Book("Clean Code", "Robert C. Martin", "102"),
  new Book("DSA in Java", "Mark", "103"),
  new Book("HTML & CSS", "John", "104"),
  new Book("React Guide", "Emily", "105")
];

const availableDiv = document.getElementById("availableBooks");
const issueForm = document.getElementById("issueForm");
const isbnInput = document.getElementById("isbnInput");
const issueMsg = document.getElementById("issueMsg");

const renderAvailable = () => {
  availableDiv.innerHTML = "";
  const available = books.filter(b => !b.isIssued);
  if (!available.length) {
    availableDiv.textContent = "No books available";
    return;
  }
  available.forEach(b => {
    const div = document.createElement("div");
    div.className = "book-item";
    div.textContent = `${b.title} by ${b.author} (ISBN: ${b.isbn})`;
    availableDiv.appendChild(div);
  });
};

renderAvailable();

issueForm.addEventListener("submit", e => {
  e.preventDefault();
  const isbn = isbnInput.value.trim();
  const book = books.find(b => b.isbn === isbn);
  if (!isbn) {
    issueMsg.textContent = "Enter an ISBN";
    issueMsg.style.color = "red";
    return;
  }
  if (!book) {
    issueMsg.textContent = "Book not found";
    issueMsg.style.color = "red";
    return;
  }
  if (book.issueBook()) {
    issueMsg.textContent = `Issued: ${book.title}`;
    issueMsg.style.color = "green";
    renderAvailable();
  } else {
    issueMsg.textContent = "Book is already issued";
    issueMsg.style.color = "red";
  }
});
