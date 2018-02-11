import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";
  constructor() {}
  ngOnInit() {}
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
