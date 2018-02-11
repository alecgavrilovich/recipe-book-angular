import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { RecipeModel } from "../recipe.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.css"]
})
export class NewRecipeComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  // uid: object;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
    // this.uid = this.authService.isAuthenticated().map(data => {
    //   // if (data === null) {
    //   //   return;
    //   // }
    //   return data !== null;
    // });
    console.log(this.authService.uid);
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
    // this.authService.isAuthenticated().subscribe(data => {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      imagePath: new FormControl(),
      desc: new FormControl(),
      uid: new FormControl(this.authService.uid),
      ingredients: new FormArray([])
    });
    // });
  }

  onAddIngredient() {
    // this.authService.isAuthenticated().subscribe(data => {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl(),
        uid: new FormControl(this.authService.uid)
      })
    );
    // });
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  ngOnDestroy(): void {}
}
