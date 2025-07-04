import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private baseUrl = 'http://localhost:8081'; // adjust if your gateway or service URL is different

  constructor(private http: HttpClient) {}

  getTotalVehicles(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vehicles/count`);
  }

  getTotalBookings(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/bookings/count`);
  }

  getTotalUsers(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/count`);
  }
}

