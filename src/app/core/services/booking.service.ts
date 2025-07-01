import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8081/booking/user/'; // change if your backend is different

  constructor(private http: HttpClient) {}

  // Get bookings for a user
  getBookingsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${userId}`);
  }

  // Cancel a booking
  cancelBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${bookingId}`);
  }

  // Create a new booking (optional)
  createBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, bookingData);
  }
}

