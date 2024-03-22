import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/accueil/book/book.component';
import { AuthorComponent } from './components/accueil/author/author.component';
import { CategoryComponent } from './components/accueil/category/category.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationBarComponent, BookComponent, AuthorComponent, CategoryComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'libraryclient';

  constructor() {}
}
