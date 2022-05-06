import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from '../room'; 
import { RoomService } from '../room.service';
@Component({
  selector: 'app-home',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  signupForm: any;
  rooms: Room= new Room();
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(1), Validators.pattern("[0-9]")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'number': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'number1': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'number2': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
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
    // console.log(this.signupForm)
    console.log(this.rooms);
    this.saveStudent();

  }

}
