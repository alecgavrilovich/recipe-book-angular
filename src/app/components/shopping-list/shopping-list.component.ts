import { ShoppingListService } from "./shopping-list.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../../shared/ingridient.model";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredients: Observable<Ingredient[]>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Observable<Ingredient[]>): void => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(id: string) {
    this.slService.startedEditing.next(id);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
