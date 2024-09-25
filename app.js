const express = require('express')
const bodyParse = require('body-parse')
const port = 3000


app.use(bodyParse.json())

// Data storage

let books = [];


// Routes
// GET all books
app.get('/books', (req, res) =>{
    res.json(books)
})

// POST method to add a new Book
app.post('/books', (req, res) => {
    const {title, auther, publisher, publishedDate, isbn} = req.body;

    if (!title || !author || !publisher || !publishedDate || !isbn) {
        return res.status(400).json({error: 'All fields must be filled'})
    }
    const newBook = {title, author, publisher, publishedDate, isbn}
    books.push(newBook)
    res.status(201).json(newBook)
})