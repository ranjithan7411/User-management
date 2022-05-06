import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
//Student[home] 
  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}/adminDetails`);
  }

  createAdmin(admin:Admin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addadmin`,admin)
  }

  getAdminById(id: number):Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/getAdminById/${id}`);
  }

  updateAdmin(id:number,admin:Admin):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/editAdmin/${id}`,Admin);
  }
  deleteStudent(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteAdmin/${id}`)
  }



}
