import { Component, OnInit, Input } from "@angular/core";
import { RecipeWithID } from "../../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeWithID;
  @Input() id: string;
  @Input() uid: string;

  ngOnInit() {}
}
