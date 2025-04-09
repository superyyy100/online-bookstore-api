// src/types/book.ts
export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
  }
  
  export interface CreateBookDTO {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
  }