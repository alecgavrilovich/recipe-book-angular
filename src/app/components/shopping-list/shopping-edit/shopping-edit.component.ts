import { ShoppingListService } from "./../shopping-list.service";
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { Ingredient } from "../../../shared/ingridient.model";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemId: string;
  editedItem: Observable<Ingredient>;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (id: string) => {
        console.log(id);
        this.editedItemId = id;
        this.editMode = true;
        // this.editedItem;
        this.slService.getIngredient(id).subscribe((data: Ingredient) => {
          this.slForm.setValue({
            name: data.name,
            amount: data.amount
          });
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemId, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemId);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
