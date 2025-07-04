import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

  get isLoginPage(): boolean {
    return this.currentUrl === '/login';
  }

  get isAdmin(): boolean {
  const role = localStorage.getItem('role');
  return role === 'ADMIN';
}

}
