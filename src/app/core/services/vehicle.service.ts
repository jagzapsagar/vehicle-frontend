import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../models/vehicle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = 'http://localhost:8082/vehicles/available'; // adjust as per your backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  getAllVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Vehicle> {
  return this.http.get<Vehicle>(`http://localhost:8082/vehicles/${id}`);
}

//deleteVehicle(id: number): Observable<any> {
 // return this.http.delete(`http://localhost:8082/vehicles/delete/${id}`);
//}

  deleteVehicle(id: number): Observable<string> {
    return this.http.delete(`http://localhost:8082/vehicles/delete/${id}`, { responseType: 'text' });
  }

  // vehicle.service.ts
updateVehicle(id: number, updatedData: any): Observable<any> {
  return this.http.put(`http://localhost:8082/vehicles/${id}`, updatedData);
}

getVehicleCount(): Observable<number> {
  return this.http.get<number>('http://localhost:8082/vehicles/count');
}




  // Add other methods as needed (create, update, delete)
}
