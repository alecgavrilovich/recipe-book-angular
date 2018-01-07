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
import { FormGroup, FormControl } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  slForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemId: string;
  // editedItem: Observable<Ingredient>;

  constructor(
    private slService: ShoppingListService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
    this.subscription = this.slService.startedEditing.subscribe(
      (id: string) => {
        console.log(id);
        this.editedItemId = id;
        this.editMode = true;
        this.slService.getIngredient(id).subscribe((data: Ingredient) => {
          if (data === null) {
            this.onClear();
            return;
          }
          this.slForm.setValue({
            name: data.name,
            amount: data.amount,
            uid: data.uid
          });
        });
      }
    );
  }

  private initForm() {
    this.authService.isAuthenticated().subscribe(data => {
      this.slForm = new FormGroup({
        name: new FormControl(),
        amount: new FormControl(),
        uid: new FormControl(data.uid)
      });
    });
  }
  // `${this.authService.uid}`
  onAddItem() {
    const newIngredient = new Ingredient(
      this.slForm.value["name"],
      this.slForm.value["amount"],
      this.slForm.value["uid"]
    );
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemId, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
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
    this.subscription.unsubscribe();
  }
}
