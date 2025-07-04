import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const loginPayload = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8085/auth/login', loginPayload).subscribe({
      next: (res) => {
        const decoded: any = jwtDecode(res.token);

        if (decoded.role === 'ADMIN') {
          localStorage.setItem('jwtToken', res.token);
          localStorage.setItem('role', decoded.role);
          localStorage.setItem('userId', decoded.userId);
          this.router.navigate(['/admin-dashboard']); // Replace with actual admin route
        } else {
          alert('You are not authorized as Admin');
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid credentials');
      }
    });
  }
}

