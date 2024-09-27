## Node project
- This project is to create a book directory
- The project will focus on handling HTTP requests and responses
- managing endpoints
- Validating data exchange.
- API Requirements
## Installation
- npm init -y
- npm install express body-parse

## To run
- node app.js
- node app

## Requirements
# Book Directory
 
# The following fields should be included for each book in the directory:
- Book Title: Title of the book
- Author: Name of the author
- Publisher: Publishing company
- Published Date: Date the book was published
- ISBN: International Standard Book Number, a unique identifier for the book
# Managing Endpoints
- Use the built-in HTTP module in Node.js to handle different HTTP methods:
- GET: Retrieve a list of all books or a specific book by ISBN.
- POST: Add a new book to the directory.
- PUT/PATCH: Update details of an existing book.
- DELETE: Remove a book from the directory by ISBN.
# Handling Data Exchange
- Use JSON to send and receive data between the client and server.
- Implement functionality to parse incoming JSON requests and respond with JSON data.
- Ensure data is well-structured and consistently formatted.
# Basic Error Handling
- Validation: Ensure that all fields are correctly populated (e.g., ISBN must be a valid number, title and author should not be empty).
- Error Responses: Implement basic error handling by returning meaningful HTTP status codes
- (e.g., 400 Bad Request for validation errors, 404 Not Found if a book does not exist).
