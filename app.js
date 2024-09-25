const express = require("express");
const bodyParse = require("body-parse");
const port = 3000;

app.use(bodyParse.json());

// Data storage

let books = [];

// Function to find book
const findBookByISBN = (isbn) => books.find((book) => book.isbn === isbn);

// Routes
// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST method to add a new Book
app.post("/books", (req, res) => {
  const { title, auther, publisher, publishedDate, isbn } = req.body;

  if (!title || !author || !publisher || !publishedDate || !isbn) {
    return res.status(400).json({ error: "All fields must be filled" });
  }
  const newBook = { title, author, publisher, publishedDate, isbn };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT/PATCH details of an existing book
app.put("/books"),
  (req, res) => {
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    const { title, author, publisher, publishedDate } = req.body;

    // Validate fields
    if (title) book.title = title;
    if (author) book.author = author;
    if (publisher) book.publisher = publisher;
    if (publishedDate) book.publishedDate = publishedDate;

    res.json(book);
  };

// DELETE remove book from database
app.delete("/books", (req, res) => {
  res.status(204).send();
});
