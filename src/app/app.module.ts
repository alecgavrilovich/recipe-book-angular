import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
// import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { ShoppingListModule } from './components/shopping-list/shopping-list.module'
import { AuthModule } from './components/auth/auth.module'
import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
