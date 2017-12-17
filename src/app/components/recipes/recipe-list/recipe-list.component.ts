import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { RecipeService } from './../recipe.service'
import { Recipe } from '../recipe.model'
import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Observable'
import { DataStorageService } from '../../../shared/data-storage.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Observable<Recipe[]>
  subscription: Subscription

  constructor(
    // private dsService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.subscription = this.recipeService.recipesChanged.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes = recipes
    //   }
    // )

    this.recipes = this.recipeService.getRecipes()
    // console.log(this.recipes)
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
