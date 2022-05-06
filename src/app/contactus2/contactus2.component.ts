import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus2.component.html',
  styleUrls: ['./contactus2.component.css']
})
export class Contactus2Component implements OnInit {
  signupForm: any;
  constructor() { }

  ngOnInit(): void {
   this.signupForm = new FormGroup({
     'userData' : new FormGroup({
       'email': new FormControl(null,[Validators.required, Validators.email]),
       'phonenumber': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
       'message': new FormControl(null,[Validators.required])
     })
      
   })
  }
  imgVisible=true;
  

  
  changeView(){
    this.imgVisible = false
  }

 onSubmit(){
   alert("Query sent successfully");
 }

}