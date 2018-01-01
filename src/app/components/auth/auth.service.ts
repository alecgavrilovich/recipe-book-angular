import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(err => console.log(err))
  }

  // signinUser(email: string, password: string) {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(res => {
  //       this.router.navigate(["/"]);
  //       firebase
  //         .auth()
  //         .currentUser.getToken()
  //         .then((token: string) => (this.token = token));
  //     })
  //     .catch(err => console.log(err));
  // }

  signinUser(email: string, password: string): void {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return this.afAuth.auth
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            this.router.navigate(["/"]);
            this.token = res.refreshToken;
            return this.token;
          });
      })
      .catch(err => console.log(err));
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.token = null;
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
