import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
@Component({
  selector: 'app-home',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {
  signupForm: any;
  "id": number;
  rooms: Room= new Room();

  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'phonenumber': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
        'number': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'number1': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'number2': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoomById(this.id).subscribe(data => {
      this.rooms= data;
    })
  }
  saveStudent(){
    this.roomService.createRoom(this.rooms).subscribe(data => {
      console.log(data);
      this.gotoRoomList();
    });
    
  }

  gotoRoomList(){
      this.router.navigate(['/viewroom']);
  }

  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }

  onSubmit(){
    this.roomService.updateRoom(this.id,this.rooms).subscribe(data => {
      this.gotoRoomList();
    })
    console.log(this.rooms);
    this.saveStudent();

  }

}
