import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../services/author/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthorService],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[] = [];
  showAuthorList: boolean = false;

  constructor(private authorService: AuthorService) {}

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }

  toggleAuthorList() {
    this.showAuthorList = !this.showAuthorList;
  }

  trackByAuthorId(index: number, author: Author): number {
    return author.authorid; 
  }
}