import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService, RecipeWithID } from "../recipe.service";
import { RecipeModel, Recipe } from "../recipe.model";
import { AuthService } from "../../auth/auth.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  id: string;
  recipe: Observable<RecipeWithID>;
  recipeForm: FormGroup;
  uid: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getRecipe(params.id);
      this.initForm();
    });
    this.authService.isAuthenticated().subscribe(data => {
      this.uid = data.uid;
    });
  }

  getRecipe(id: string) {
    this.recipe = this.recipeService.getRecipe(id);
  }

  onSubmit() {
    const newRecipe = new RecipeModel(
      this.recipeForm.value["name"],
      this.recipeForm.value["desc"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["uid"],
      this.recipeForm.value["ingredients"]
    );
    this.recipeService.updateRecipe({ ...newRecipe });
    this.onCancel();
  }

  onAddIngredient() {
    this.authService.isAuthenticated().subscribe(data => {
      (<FormArray>this.recipeForm.get("ingredients")).push(
        new FormGroup({
          name: new FormControl(null, Validators.required),
          amount: new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ]),
          uid: new FormControl(data.uid)
        })
      );
    });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  private initForm() {
    // this.authService.isAuthenticated().subscribe(data => {
    const recipeIngredients = new FormArray([]);
    this.recipe.subscribe((recipeData: RecipeWithID) => {
      if (recipeData.ingredients) {
        for (const ingredient of recipeData.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
              uid: new FormControl(this.uid)
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        name: new FormControl(recipeData.name, Validators.required),
        imagePath: new FormControl(recipeData.imagePath, Validators.required),
        desc: new FormControl(recipeData.desc, Validators.required),
        uid: new FormControl(this.uid),
        ingredients: recipeIngredients
      });
    });
    // });
  }
}
