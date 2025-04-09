import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import router from '../routes/route';

const app = express();
app.use(bodyParser.json());
app.use(router);

describe('Books API', () => {
  it('should list all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Assuming we have 2 books in the initial data
  });

  it('should retrieve a book by ID', async () => {
    const response = await request(app).get('/api/books/1');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('The Great Gatsby');
  });

  it('should return 404 for a non-existent book', async () => {
    const response = await request(app).get('/api/books/999');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Book not found');
  });

  it('should create a new book', async () => {
    const newBook = {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      isbn: '1234567891',
      description: 'A novel about the American dream.',
    };

    const response = await request(app).post('/api/books').send(newBook);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newBook.title);
  });

  it('should return 400 for invalid book data', async () => {
    const invalidBook = {
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      isbn: '1234567891',
    };

    const response = await request(app).post('/api/books').send(invalidBook);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Missing required fields');
  });
});