import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}/roomDetails`);
  }

  createRoom(room:Room): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addroom`,room)
  }

  getRoomById(id: number):Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/getRoomById/${id}`);
  }

  updateRoom(id:number,room:Room):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/editroom/${id}`,room);
  }
  deleteRoom(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteroom/${id}`)
  }
}
