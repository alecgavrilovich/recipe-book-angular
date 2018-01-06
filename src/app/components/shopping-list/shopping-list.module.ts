import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  exports: []
})
export class ShoppingListModule {}
