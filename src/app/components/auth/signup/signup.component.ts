import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authServise: AuthService) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authServise.signupUser(email, password);
  }
}
