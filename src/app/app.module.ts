import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./components/core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./components/shopping-list/shopping-list.module";
import { AuthModule } from "./components/auth/auth.module";
import { FirebaseModule } from "./firebase.module";
import { DataStorageService } from "./shared/data-storage.service";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [DataStorageService]
})
export class AppModule {}
