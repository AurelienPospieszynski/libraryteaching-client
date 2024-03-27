import { Book } from '../../../models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [BookService],
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  showBookList: boolean = false;
  searchTerm: string = '';

  constructor(private bookService: BookService) {}

  async ngOnInit() {
    this.books = await this.bookService.getAllBooks();
    this.filteredBooks = this.books;
  }

  toggleBookList() {
    this.showBookList = !this.showBookList;
    if (!this.showBookList) {
      this.searchTerm = '';
    }
  }

  trackByBookId(index: number, book: Book): number {
    return book.bookid; 
  }
}
