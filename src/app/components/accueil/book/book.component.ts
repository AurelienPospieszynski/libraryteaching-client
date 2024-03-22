import { Book } from '../../../models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  providers: [BookService],
  templateUrl: './book.component.html',
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
