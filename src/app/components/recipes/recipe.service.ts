import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../../shared/ingridient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another test recipe',
      'This is a test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
