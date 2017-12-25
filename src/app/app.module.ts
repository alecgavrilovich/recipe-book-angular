import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CoreModule } from './components/core/core.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { ShoppingListModule } from './components/shopping-list/shopping-list.module'
import { AuthModule } from './components/auth/auth.module'
import { FirebaseModule } from './firebase.module'
import { DataStorageService } from './shared/data-storage.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
// import { DropdownDirective } from './shared/dropdown.directive'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    FirebaseModule,
    NgbModule.forRoot()
    // DropdownDirective
  ],
  bootstrap: [AppComponent],
  providers: [DataStorageService]
})
export class AppModule {}
