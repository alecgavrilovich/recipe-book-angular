import { Ingredient } from "./../../shared/ingridient.model";
import { Subject } from "rxjs/Subject";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { OnInit } from "@angular/core";

@Injectable()
export class ShoppingListService implements OnInit {
  ingredientsChanged = new Subject<Observable<Ingredient[]>>();
  startedEditing = new Subject<string>();
  private ingredientsCollection: AngularFirestoreCollection<Ingredient>;
  private ingredients: Observable<Ingredient[]>;
  private ingredientDoc: AngularFirestoreDocument<Ingredient>;
  private ingredient: Observable<Ingredient>;

  constructor(private afs: AngularFirestore) {
    this.ingredientsCollection = this.afs.collection("ingredients");
    this.ingredients = this.ingredientsCollection
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Ingredient;
          const id = a.payload.doc.id;
          // console.log(id);
          return { id, ...data };
        });
      });
  }

  ngOnInit(): void {}

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(id: string) {
    this.ingredientDoc = this.afs.doc(`ingredients/${id}`);
    this.ingredient = this.ingredientDoc.valueChanges();
    return this.ingredient;
  }

  addIngredient(ingredient: Ingredient) {
    this.afs.collection("ingredients").add({ ...ingredient });
    // this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // this.ingredients.push(...ingredients);
    // this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: string, newIngredient: Ingredient) {
    this.ingredientDoc.set({ ...newIngredient });
    // this.ingredientsChanged.next(this.ingredients);
    this.startedEditing.next("updated");
  }

  deleteIngredient(id: string) {
    this.ingredientDoc.delete();
  }
}
