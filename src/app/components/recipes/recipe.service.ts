import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { DataStorageService } from "../../shared/data-storage.service";
import { RecipeModel } from "./recipe.model";
import { Ingredient } from "../../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Observable } from "rxjs/Observable";
import { Recipe } from "./recipe.model";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

export interface RecipeWithID extends Recipe {
  id: string;
}

@Injectable()
export class RecipeService {
  private recipesCollection: AngularFirestoreCollection<Recipe>;
  private recipeDoc: AngularFirestoreDocument<RecipeWithID>;
  private recipes: Observable<RecipeWithID[]>;
  private recipe: Observable<RecipeWithID>;

  constructor(
    private dsServise: DataStorageService,
    private slService: ShoppingListService,
    private afs: AngularFirestore
  ) {
    this.recipesCollection = this.afs.collection("recipes");
    this.recipes = this.recipesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Recipe;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  // Recipes Operations
  getRecipes(): Observable<RecipeWithID[]> {
    return this.recipes;
  }

  getRecipe(id: string): Observable<RecipeWithID> {
    this.recipeDoc = this.afs.doc(`recipes/${id}`);
    this.recipe = this.recipeDoc.valueChanges();
    return this.recipe;
  }

  addRecipe(recipe: Recipe): void {
    this.dsServise.getRecipesCollection().add(recipe);
  }

  updateRecipe(newRecipe: Recipe): void {
    this.recipeDoc.update(newRecipe);
  }

  deleteRecipe(): void {
    this.recipeDoc.delete();
  }

  // Ingredients Operations
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
