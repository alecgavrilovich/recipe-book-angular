import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";

@Injectable()
export class AuthService implements OnInit {
  token: string;
  uid: string;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // console.log(this.uid);
    // this.afAuth.authState.subscribe(data => {
    //   this.uid = data.uid;
    // });
  }

  registerUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }

  signinUser(email: string, password: string): void {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
      })
      .then(res => {
        console.log(res);

        this.uid = res.uid;
      });
    this.router.navigate(["/"]);
    console.log(this.uid);
  }

  logout(): void {
    this.afAuth.auth.signOut();
    // this.router.navigate(["/"]);
    // this.uid = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.afAuth.authState;
  }
}
