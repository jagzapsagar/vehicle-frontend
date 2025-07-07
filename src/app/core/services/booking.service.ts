import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8081/booking'; // change if your backend is different

  constructor(private http: HttpClient) {}


  getBookingsByUser(userId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`);
}

  // Cancel a booking
  //cancelBooking(bookingId: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${bookingId}`);
  //}

  cancelBookingggg(id: number): Observable<any> {
  return this.http.delete(`http://localhost:8081/booking/cancel/${id}`, {
    responseType: 'text' // if backend returns plain string
  });
}

cancelBooking(id: number): Observable<any> {
  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log('-----------JWT Token:', token);
  return this.http.delete(`http://localhost:8081/booking/cancel/${id}`, {
    headers: headers,
    responseType: 'text' // if your backend returns a plain string
  });
}



  //return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`, { headers });


  // Create a new booking (optional)
  createBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, bookingData);
  }
  getAllBookings(page: number, size: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8081/booking?page=${page}&size=${size}`);
}

getBookingCount(): Observable<number> {
  return this.http.get<number>('http://localhost:8081/booking/count');
}


}

