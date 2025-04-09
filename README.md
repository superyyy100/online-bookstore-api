# Online Bookstore API

## Overview
This is a simple RESTful API for an online bookstore, implemented using TypeScript and Express.

## Features
- List all books
- Get book details by ID
- Create new books
- OpenAPI (Swagger) documentation

## Endpoints
- **GET /api/books**: List all books
- **GET /api/books/:id**: Retrieve details of a book by ID
- **POST /api/books**: Create a new book

## Running the API Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `npm start`
4. View Swagger docs at `http://localhost:3000/api-docs`
5. Basic testing by Jest and Supertest using `npm test`

## Dependencies
- express
- uuid
- body-parser
- swagger-jsdoc
- swagger-ui-express
- yamljs

## Error Handling
- Returns a 404 status if a book is not found.
- Returns a 400 Bad Request if the input data is invalid.

### Project Structure
```md
online-bookstore-api

src/
├── routes/
│   └── route.ts
├── controllers/
│   └── bookController.ts
├── services/
│   └── bookService.ts
├── types/
│   └── book.ts
├── data/
│   └── books.ts
├── specs/
│   └── openapi.yaml
├── test/
│   └── book.test.ts
├── app.ts
├── package.json
├── package-lock.json
├── nodemon.json
├── tsconfig.json
├── jest.config.js
└── README.md
```