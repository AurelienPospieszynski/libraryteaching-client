import { Book } from '../../models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  providers: [BookService],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  showBookList: boolean = false;

  constructor(private bookService: BookService) {}

  async ngOnInit() {
    this.books = await this.bookService.getAllBooks();
  }

  toggleBookList() {
    this.showBookList = !this.showBookList;
  }

  trackByBookId(index: number, book: Book): number {
    return book.bookid; 
  }
}
