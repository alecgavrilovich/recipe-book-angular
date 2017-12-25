import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { RecipeModel } from '../recipe.model'
import { RecipeService, RecipeWithID } from '../recipe.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: string
  recipe: Observable<RecipeWithID>

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      this.id = params.id
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  // Recipes methods
  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route })
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe()
    this.router.navigate(['/recipes'])
  }

  // Ingredients methods
  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
