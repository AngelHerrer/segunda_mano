import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './component/modal/modal.component';
import { InputPasswordComponent } from './component/input-password/input-password.component';
import { InputEmailComponent } from './component/input-email/input-email.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ConfirmPasswordComponent } from './component/confirm-password/confirm-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalComponent } from './component/final/final.component';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    InputPasswordComponent,
    InputEmailComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPasswordComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
