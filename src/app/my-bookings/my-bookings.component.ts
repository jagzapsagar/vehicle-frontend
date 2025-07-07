import { Component, OnInit } from '@angular/core';
import { BookingService } from '../core/services/booking.service';
import { UserService } from '../core/services/user.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];
  userId: number = 0;

  constructor(
    private bookingService: BookingService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const email = this.getEmailFromToken();
    if (email) {
      this.userService.getUserIdByEmail(email).subscribe({
        next: (id) => {
          this.userId = id;
          this.loadBookings();  // Now that we have userId, load bookings
        },
        error: (err) => {
          console.error('Failed to fetch userId:', err);
        }
      });
    } else {
      console.error('Email not found in token');
    }
  }

  getEmailFromToken(): string | null {
    const token = localStorage.getItem('jwtToken');
    if (!token) return null;
    const decoded: any = jwtDecode(token);
    return decoded?.sub || decoded?.email || null;
  }

  loadBookings(): void {
    this.bookingService.getBookingsByUser(this.userId).subscribe({
      next: (data) => {
        this.bookings = data;
        console.log('Bookings fetched:', this.bookings);
      },
      error: (err) => {
        console.error('Failed to load bookings', err);
      }
    });
  }


  cancelBooking(id: number): void {
  if (confirm('Are you sure you want to cancel this booking?')) {
    this.bookingService.cancelBooking(id).subscribe({
      next: (res) => {
        alert('Booking cancelled successfully!');
        this.loadBookings(); // reload bookings
      },
      error: (err) => {
        console.error('Error cancelling booking', err);
        alert('Failed to cancel booking');
      }
    });
  }
}

}
