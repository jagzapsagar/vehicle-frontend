import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalVehicles = 0;
  totalBookings = 0;
  totalUsers = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // You can call services here to fetch counts
    this.totalVehicles = 10; // Replace with API data
    this.totalBookings = 25; // Replace with API data
    this.totalUsers = 7;     // Replace with API data
  }
  goToBookings(): void {
  this.router.navigate(['/admin-bookings']);
}
    goToManageVehicles() {
  this.router.navigate(['/manage-vehicles']);
}
}

