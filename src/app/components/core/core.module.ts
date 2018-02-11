import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../../shared/shared.module";
import { AppRoutingModule } from "../../app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../../shared/auth.interceptor";
import { LoggingIntercetor } from "../../shared/logging.intercetor";

@NgModule({
  imports: [CommonModule, SharedModule, AppRoutingModule, HttpClientModule],
  declarations: [HomeComponent, HeaderComponent],
  exports: [AppRoutingModule, HeaderComponent],
  providers: []
})
export class CoreModule {}
