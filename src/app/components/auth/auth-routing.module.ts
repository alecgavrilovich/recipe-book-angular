import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterUserComponent } from "./register-user/register-user.component";
import { SigninComponent } from "./signin/signin.component";

const authRoutes: Routes = [
  { path: "register", component: RegisterUserComponent },
  { path: "signin", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
