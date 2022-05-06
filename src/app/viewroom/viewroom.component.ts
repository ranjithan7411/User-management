import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';
@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrls: ['./viewroom.component.css']
})
export class ViewroomComponent implements OnInit {

 
  rooms: any
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.getroom()
  }
   public getroom()
  {
    this.roomService.getRoomList().subscribe(data => {
      this.rooms = data;
    })
    
  }
  
  updateRoom(id: number){
  this.router.navigate(['/editroom',id]);
}
deleteRoom(id:number){
  this.roomService.deleteRoom(id).subscribe(data => {
    console.log(data);
    this.getroom();
  })
}


}
