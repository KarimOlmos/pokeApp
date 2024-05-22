import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    FormsModule

  ]
})
export class AuthModule { }
