import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

import { RecipeService, RecipeWithID } from '../recipe.service'
import { RecipeModel } from '../recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string
  editMode = false
  recipeForm: FormGroup
  recipe

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      this.editMode = params.id != null
      console.log(this.editMode)

      this.initForm()
    })
  }

  onSubmit() {
    const newRecipe = new RecipeModel(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    )
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancel()
  }

  onAddIngredient() {
    // ;(<FormArray>this.recipeForm.get('ingredients')).push(
    //   new FormGroup({
    //     name: new FormControl(null, Validators.required),
    //     amount: new FormControl(null, [
    //       Validators.required,
    //       Validators.pattern(/^[1-9]+[0-9]*$/)
    //     ])
    //   })
    // )
  }

  onDeleteIngredient(index: number) {
    // ;(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onCancel() {
    // this.router.navigate(['../'], { relativeTo: this.route })
  }

  private initForm() {
    // let recipe
    let recipeName = ''
    let recipeImagePath = ''
    let recipeDescription = ''
    const recipeIngredients = new FormArray([])
    if (this.editMode) {
      this.recipe = this.recipeService.getRecipe(this.id).subscribe(data => {
        let data2 = data
        return data2
      })
      console.log(this.recipe)

      // recipeName = recipe.name
      // recipeImagePath = recipe.imagePath
      // recipeDescription = recipe.desc

      // if (recipe['ingredients']) {
      //   for (const ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         name: new FormControl(ingredient.name, Validators.required),
      //         amount: new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     )
      //   }
      // }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    })
  }
}
