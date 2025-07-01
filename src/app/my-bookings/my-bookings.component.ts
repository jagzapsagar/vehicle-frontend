import { Component, OnInit } from '@angular/core';
import { BookingService } from '../core/services/booking.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];
   userId: number = 12;
  //userId = Number(localStorage.getItem('userId')); // assuming you store this after login

  constructor(private bookingService: BookingService) {}

/*ngOnInit(): void {
  const storedId = localStorage.getItem('userId');

  if (storedId && !isNaN(Number(storedId))) {
    this.userId = Number(storedId);
    this.loadBookings();
  } else {
    console.error('Invalid or missing userId in localStorage');
  }
}*/
ngOnInit(): void {
    this.loadBookings();
  }


/*loadBookings(): void {
  //this.bookingService.getBookingsByUser(this.userId).subscribe({
    this.bookingService.getBookingsByUser().subscribe({
    next: (data) => this.bookings = data,
    error: (err) => console.error('Failed to load bookings', err)
  });
}
*/
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
    if (confirm('Cancel this booking?')) {
      this.bookingService.cancelBooking(id).subscribe({
        next: () => {
          alert('Booking canceled');
          this.loadBookings(); // reload updated list
        },
        error: () => alert('Failed to cancel booking')
      });
    }
  }
}
