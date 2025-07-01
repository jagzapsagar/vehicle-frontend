import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { jwtDecode } from 'jwt-decode'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}


  

  /*login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        // Save token & userId
        localStorage.setItem('jwtToken', res.token);
        localStorage.setItem('userId', res.userId.toString());
        localStorage.setItem('role', res.role);

        // Navigate to user dashboard
        this.router.navigate(['/vehicles']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials. Please try again.');
      }
    });
  }
}*/



login(): void {
  this.authService.login(this.email, this.password).subscribe({
    next: (res) => {
      // Save token
      localStorage.setItem('jwtToken', res.token);

      // Decode token to get userId and role
      const decoded: any = jwtDecode(res.token);
      localStorage.setItem('userId', decoded.userId);  // Or 'sub', depends on your token claims
      localStorage.setItem('role', decoded.role);

      // Redirect
      this.router.navigate(['/dashboard']);
    },
    error: () => {
      alert('Login failed');
    }
  });
}
}
