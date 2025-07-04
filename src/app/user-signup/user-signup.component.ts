import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  user = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  mobile: '',
  role: 'USER'  // Default role added
};


  constructor(private http: HttpClient, private router: Router) {}

  register() {
    console.log('User registration payload:', this.user);
    this.http.post('http://localhost:8083/users/register', this.user).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Registration failed', err);
        alert('Something went wrong!');
      }
    });
  }
}

