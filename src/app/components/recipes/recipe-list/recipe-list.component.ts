import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'This is a test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
