// src/controllers/bookController.ts
import { Request, Response } from 'express';
import { BookService } from '../services/bookService';
import { CreateBookDTO } from '../types/book';

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  getAllBooks = (req: Request, res: Response) => {
    const books = this.bookService.getAllBooks();
    res.json(books);
  };

  getBookById = (req: Request, res: Response) => {
    const book = this.bookService.getBookById(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.json(book);
  };

  createBook = (req: Request, res: Response) => {
    try {
      const bookData: CreateBookDTO = req.body;
      
      // Basic validation
      if (!bookData.title || !bookData.author || !bookData.isbn) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
      }

      const newBook = this.bookService.createBook(bookData);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ message: 'Invalid book data' });
    }
  };
}