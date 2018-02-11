import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeService, RecipeWithID } from "./../recipe.service";
import { RecipeModel, Recipe } from "../recipe.model";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { DataStorageService } from "../../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeWithID[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  onNewRecipe() {
    this.authService.isAuthenticated().subscribe(res => {
      if (res !== null) {
        this.router.navigate(["new"], { relativeTo: this.route });
      } else {
        this.router.navigate(["/signin"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
