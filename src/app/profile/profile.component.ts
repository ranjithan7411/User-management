import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  students: any
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudent()
  }
   public getStudent()
  {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    })
    
  }
  public getStudentById(id:number)
  {
    this.studentService.getStudentById(id).subscribe(data => {
      this.students = data;
    })
    
  }
  
updateStudent(id: number){
  this.router.navigate(['/updateprofile',id]);
}
deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe(data => {
    console.log(data);
    this.getStudent();
  })
}
  
}
