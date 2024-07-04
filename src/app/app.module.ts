import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { PureJsonPipe } from './pipes/pure-json.pipe';
import { ImpureJsonPipe } from './pipes/impure-json.pipe';
import { RegisterComponent } from './pages/register/register.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';
import { FeatureComponent } from './pages/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PasswordValidatorDirective,
    PureJsonPipe,
    ImpureJsonPipe,
    RegisterComponent,
    ClickOutsideDirective,
    ConfirmPasswordValidatorDirective,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
