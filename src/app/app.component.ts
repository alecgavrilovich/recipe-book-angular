import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTmGtDFB9Sp1NqZOR4arOF2W1rWXgEdms',
      authDomain: 'ng-recipe-book-75db1.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
