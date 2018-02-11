import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeModel } from "../recipe.model";
import { RecipeService, RecipeWithID } from "../recipe.service";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../auth/auth.service";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { Ingredient } from "../../../shared/ingridient.model";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  id: string;
  recipe: Observable<RecipeWithID>;
  uid: string;
  subscprition: Subscription;
  subscritptionForRecipe: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private slService: ShoppingListService
  ) {
    // this.authService.isAuthenticated().map(actions => {
    //   console.log(actions.uid);
    // });
    // this.uid = console.log(this.uid);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      this.id = params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    });
    this.subscprition = this.authService.isAuthenticated().subscribe(res => {
      // if (res === null) {
      //   return;
      // }
      this.uid = res.uid;
    });
    // After sign out there is an error subscribe.js:159 TypeError: Cannot read property 'uid' of null
    // this.authService.isAuthenticated().subscribe(data => {
    //   console.log(data);
    //   this.uid = data.uid;
    //   console.log(this.uid);
    // });
    // console.log(this.uid);
  }

  // Recipes methods
  onEditRecipe(): void {
    this.router.navigate(["edit"], { relativeTo: this.route });
    this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe();
    this.router.navigate(["/recipes"]);
  }

  // Ingredients methods
  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.id);
    // let ingredients;
    console.log("test");
    // this.recipe.subscribe()... didn't work
    this.recipeService.getRecipe(this.id).subscribe((data: RecipeWithID) => {
      console.log(data);
      // return (ingredients = data.ingredients);
      this.recipeService.addIngredientsToShoppingList(data.ingredients);
      // for (const ingredient of data.ingredients) {
      //   const newIngredient: Ingredient = new Ingredient(
      //     ingredient.name,
      //     ingredient.amount,
      //     this.uid
      //   );
      //   this.slService.addIngredient({ ...newIngredient });
      // }
    });
    // console.log(ingredients);
  }

  ngOnDestroy(): void {
    this.subscprition.unsubscribe();
    // this.subscritptionForRecipe.unsubscribe();
  }
}
