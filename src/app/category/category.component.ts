import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  providers: [CategoryService],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  showCategoryList: boolean = false;

  constructor(private categoryService: CategoryService) {}

  async ngOnInit() {
    this.categories = await this.categoryService.getAllCategories();
  }
  

  toggleCategoryList() {
    this.showCategoryList = !this.showCategoryList;
  }

  trackByCategoryId(index: number, category: Category): number {
    return category.categoryid; 
  }
}
