import { Component, OnInit } from '@angular/core';
import { BookingService } from '../core/services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  bookings: any[] = [];
  page = 0;
  size = 4;
  totalPages = 0;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getAllBookings(this.page, this.size).subscribe({
      next: res => {
        this.bookings = res.content;
        this.totalPages = res.totalPages;
      },
      error: err => console.error('Error loading bookings', err)
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadBookings();
    }
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadBookings();
    }
  }
}

