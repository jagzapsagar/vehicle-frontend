import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../core/services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../core/services/user.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  vehicleId: number = 0;
  vehicle?: Vehicle;
  startDate: string = '';
  endDate: string = '';
  userId: number = 0; 

  today: string = '';

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    
    this.vehicleId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVehicle();
    this.setUserIdFromToken(); // Fetch userId from email in token
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // 'YYYY-MM-DD'
  }

  loadVehicle(): void {
    this.vehicleService.getById(this.vehicleId).subscribe({
      next: (data) => this.vehicle = data,
      error: (err) => console.error('Error loading vehicle:', err)
    });
  }

  setUserIdFromToken(): void {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const decoded: any = jwtDecode(token);
      const email = decoded.sub || decoded.email;

      if (email) {
        this.userService.getUserIdByEmail(email).subscribe({
          next: (id: number) => {
            this.userId = id;
            console.log('✅ userId fetched:', this.userId);
          },
          error: (err) => {
            console.error('Failed to fetch userId:', err);
          }
        });
      }
    } catch (e) {
      console.error('Invalid token', e);
    }
  }

  submitBooking(): void {
    if (!this.userId) {
      alert('User ID not found. Please try logging in again.');
      return;
    }

    const bookingData = {
      userId: this.userId,
      vehicleId: this.vehicleId,
      startDate: this.startDate,
      endDate: this.endDate
    };

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwtToken')}`
    );

    this.http.post('http://localhost:8081/booking', bookingData, { headers }).subscribe({
      next: (res) => alert('✅ Booking confirmed!'),
      error: (err) => {
        console.error('Booking failed:', err);
        alert('❌ Booking failed. Please try again.');
      }
    });
  }
}
