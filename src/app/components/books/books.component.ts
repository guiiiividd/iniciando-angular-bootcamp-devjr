import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  book: Book = {} as Book;
  isUpdating: boolean = false;

  books: Book[] = [
    {
      id: 1,
      title: 'Código Limpo: Habilidades Práticas do Agile Software',
      author: 'Robert C. Martin',
      price: 95,
    },
    {
      id: 2,
      title: 'Conceitos Angular',
      author: 'Guilherme Vidal',
      price: 100,
    },
    {
      id: 3,
      title: 'O Programador Pragmático: De Aprendiz a Mestre',
      author: 'Andrew Hunt e David Thomas',
      price: 165,
    },
  ];

  saveBook() {
    if (!this.isUpdating) {
      this.book.id = this.books.length + 1;
      this.books.push(this.book);
    }

    this.book = {} as Book;
  }

  update(selectedBook: Book) {
    this.book = selectedBook;
    this.isUpdating = true;
  }

  remove(book: Book) {
    console.log('Remove book: ' + book.title);
  }
}
