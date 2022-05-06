import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupForm: any;
  students: Student= new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

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
  saveStudent(){
    this.studentService.createStudent(this.students).subscribe(data => {
      console.log(data);
      this.gotoStudentList();
    });
    
  }

  gotoStudentList(){
      this.router.navigate(['/viewstudent']);
  }

  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }

  onSubmit(){
    
    console.log(this.students);
    this.saveStudent();

  }

}
