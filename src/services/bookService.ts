import { v4 as uuidv4 } from 'uuid';
import { Book, CreateBookDTO } from '../types/book';
import { books } from '../data/books';

export class BookService {
  getAllBooks(): Book[] {
    return books;
  }

  getBookById(id: string): Book | undefined {
    return books.find(book => book.id === id);
  }

  createBook(bookData: CreateBookDTO): Book {
    const newBook: Book = {
      id: uuidv4(),
      ...bookData
    };
    books.push(newBook);
    return newBook;
  }
}