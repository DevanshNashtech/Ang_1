import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(registerForm: NgForm) {
    const formValues = registerForm.value;

    if (formValues['password'] !== formValues['confirmPassword']) {
      registerForm.controls['confirmPassword'].setErrors({ passwordMismatch: true });
      return;
    }

    this.http.post('http://localhost:3000/users', {
      email: formValues['email'],
      password: formValues['password']
    }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
