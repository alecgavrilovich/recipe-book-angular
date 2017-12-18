import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { RecipeService } from '../recipe.service'
import { RecipeModel } from '../recipe.model'

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.initForm()
  }

  onSubmit() {
    const newRecipe = new RecipeModel(
      this.recipeForm.value['name'],
      this.recipeForm.value['desc'],
      this.recipeForm.value['imagePath']
      // this.recipeForm.value['ingredients']
    )
    this.recipeService.addRecipe({ ...newRecipe })
  }

  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      imagePath: new FormControl(),
      desc: new FormControl()
      // ingredients: data.ingredients
    })
  }
}
