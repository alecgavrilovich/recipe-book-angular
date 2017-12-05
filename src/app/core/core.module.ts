import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { SharedModule } from '../shared/shared.module'
import { AppRoutingModule } from '../app-routing.module'

import { ShoppingListService } from '../components/shopping-list/shopping-list.service'
import { RecipeService } from '../components/recipes/recipe.service'
import { DataStorageService } from '../shared/data-storage.service'
import { AuthService } from '../components/auth/auth.service'

@NgModule({
  imports: [CommonModule, SharedModule, AppRoutingModule],
  declarations: [HomeComponent, HeaderComponent],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
