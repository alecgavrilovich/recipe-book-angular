import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { RecipeModel } from "../recipe.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.css"]
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const newRecipe = new RecipeModel(
      this.recipeForm.value["name"],
      this.recipeForm.value["desc"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["uid"],
      this.recipeForm.value["ingredients"]
    );
    this.recipeService.addRecipe({ ...newRecipe });
    this.onCancel();
  }

  initForm() {
    // const ingredients = new FormArray([
    //   new FormGroup({
    //     name: new FormControl(),
    //     amount: new FormControl()
    //   })
    // ]);
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      imagePath: new FormControl(),
      desc: new FormControl(),
      uid: new FormControl(this.authService.uid),
      ingredients: new FormArray([])
    });
    // console.log(this.authService.uid);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
