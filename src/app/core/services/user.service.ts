// src/app/core/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8083/users';  // Replace if needed

  constructor(private http: HttpClient) {}

  // POST call to get user ID by email
 // getUserIdByEmail(email: string): Observable<number> {
   // return this.http.post<number>(`http://localhost:8083/users/userid/abc@gmail.com`, { email });
  //}

  getUserIdByEmail(email: string): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/userid/${email}`);
}

getUsers(page: number = 0, size: number = 5): Observable<any> {
  return this.http.get<any>(`http://localhost:8083/users/get?page=${page}&size=${size}`);
}


deleteUser(userId: number): Observable<any> {
  return this.http.delete(`http://localhost:8083/users/delete/${userId}`, { responseType: 'text' });
}


}

