import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import { Student } from '../student';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin: Student = new Student();
  signupForm: any;
  msg=''
  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'phonenumber': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  }

  onSubmit(){
    
    this.service.loginUserFromRemote(this.adminlogin).subscribe(
      data=>{
      console.log("response recieved");
      //this.toster.success({detail:"SUCCESS",summary:'Login Successfull! Welcome to Doc-key',duration:5000});
      this.router.navigate(['/navbar']);
      },
      error=>{
        //this.toster.error({detail:"ERROR",summary:'User nor found',duration:5000});
        console.log("exception occurd");
        alert("Bad credentials,please enter valid emailid and passward")
        this.msg="Bad credentials,please enter valid emailid and passward"
      }
    )
  }
  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }
  adminLogin(){
      console.log(this.adminlogin)
  }
}
