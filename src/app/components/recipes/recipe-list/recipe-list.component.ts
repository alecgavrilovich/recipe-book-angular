import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeService, RecipeWithID } from "./../recipe.service";
import { RecipeModel, Recipe } from "../recipe.model";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<RecipeWithID[]>;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
