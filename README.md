# Online Bookstore API

## Overview
This is a simple RESTful API for an online bookstore, implemented using TypeScript and Express.

## Endpoints
- **GET /api/books**: List all books
- **GET /api/books/:id**: Retrieve details of a book by ID
- **POST /api/books**: Create a new book

## Running the API Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `npm run dev` (you may need to add a script in package.json for this).

## Dependencies
- Express
- Body-parser
- TypeScript
- Nodemon (for development)

## Error Handling
- Returns a 404 status if a book is not found.
- Returns a 400 Bad Request if the input data is invalid.