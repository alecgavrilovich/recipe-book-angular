import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  constructor(private authServise: AuthService) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authServise.registerUser(email, password);
  }
}
