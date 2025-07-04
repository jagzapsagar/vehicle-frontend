import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../core/services/vehicle.service';
import { BookingService } from '../core/services/booking.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalVehicles = 0;
  totalBookings = 0;
  totalUsers = 0;

  constructor(private router: Router,private vehicleService: VehicleService,private bookingService: BookingService) {}

  ngOnInit(): void {
     this.loadCounts();
    // You can call services here to fetch counts
    this.totalVehicles = 0; // Replace with API data
    this.totalBookings = 25; // Replace with API data
    this.totalUsers = 7;     // Replace with API data
  }
  goToBookings(): void {
  this.router.navigate(['/admin-bookings']);
}
    goToManageVehicles() {
  this.router.navigate(['/manage-vehicles']);
}

loadCounts(): void {
  this.vehicleService.getVehicleCount().subscribe({
    next: (count) => this.totalVehicles = count,
    error: () => console.error('Failed to load vehicle count')
  });

  this.bookingService.getBookingCount().subscribe({
    next: (count) => this.totalBookings = count,
    error: () => console.error('Failed to load booking count')
  });

  

  
}
}

