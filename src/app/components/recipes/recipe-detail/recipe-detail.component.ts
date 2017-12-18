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
  recipe: Observable<RecipeWithID>
  id: string

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params)

      this.id = params.id
      console.log(this.id)

      this.recipe = this.recipeService.getRecipe(this.id)
      console.log(this.recipe)
    })
  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id)
    // this.router.navigate(['/recipes'])
  }
}
