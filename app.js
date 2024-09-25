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

