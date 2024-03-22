import { Component } from '@angular/core';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [AuthorComponent, BookComponent, CategoryComponent],
  templateUrl: './accueil.component.html',
})
export class AccueilComponent {

}
