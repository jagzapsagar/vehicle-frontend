import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../core/services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';

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
  userId: number = 12; // Replace with actual logged-in user later

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.vehicleId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVehicle();
  }

  loadVehicle(): void {
    this.vehicleService.getById(this.vehicleId).subscribe({
      next: (data) => this.vehicle = data,
      error: (err) => console.error('Error loading vehicle:', err)
    });
  }

  submitBooking(): void {
    const bookingData = {
      userId: this.userId,
      vehicleId: this.vehicleId,
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.http.post('http://localhost:8081/booking', bookingData).subscribe({
      next: (res) => alert('✅ Booking confirmed!'),
      error: (err) => {
        console.error('Booking failed:', err);
        alert('❌ Booking failed. Please try again.');
      }
    });
  }
}
