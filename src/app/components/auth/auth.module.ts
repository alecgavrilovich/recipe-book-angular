import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SigninComponent, RegisterUserComponent],
  imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule {}
