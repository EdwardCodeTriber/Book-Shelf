const express = require('express')
const bodyParse = require('body-parse')
const port = 3000


app.use(bodyParse.json())

// Data storage

let books = [];

