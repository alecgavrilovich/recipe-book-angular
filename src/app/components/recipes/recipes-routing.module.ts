import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { NewRecipeComponent } from "./new-recipe/new-recipe.component";

import { AuthGuard } from "../auth/auth.guard";

const recipesRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: NewRecipeComponent, canActivate: [AuthGuard] },
      { path: ":id", component: RecipeDetailComponent },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(recipesRoutes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class RecipesRoutingModule {}
