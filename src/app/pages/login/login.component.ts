import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  onSubmit(loginForm: NgForm) {
    const formValues = loginForm.value;

    this.http.get<any[]>('http://localhost:3000/users', {
      params: {
        email: formValues['email'],
        password: formValues['password']
      }
    }).subscribe(users => {
      if (users.length > 0) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid login credentials');
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
