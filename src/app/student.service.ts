import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
//Student[home] 
  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}/studentDetails`);
  }

  createStudent(student:Student): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/registeruser`,student)
  }

  getStudentById(id: number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/getStudentById/${id}`);
  }

  updateStudent(id:number,student:Student):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/editStudent/${id}`,Student);
  }
  deleteStudent(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletestudent/${id}`)
  }
  public loginUserFromRemote(student:Student):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/login`,student)
 }
 createStud(student:Student): Observable<any>{
  return this.httpClient.post<any>(`${this.baseURL}/registerstudent`,student)
}
public loginStudentFromRemote(student:Student):Observable<any>{
  return this.httpClient.post<any>(`${this.baseURL}/loginstud`,student)
}


  
}
