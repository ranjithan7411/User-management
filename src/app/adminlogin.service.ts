import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Adminlogin[]>{
    return this.httpClient.get<Adminlogin[]>(`${this.baseURL}/studentDetails`);
  }

  
  // getStudentById(id: number):Observable<Student>{
  //   return this.httpClient.get<Student>(`${this.baseURL}/getStudentById/${id}`);
  // }

  


}
