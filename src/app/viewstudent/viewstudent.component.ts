import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  
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
  
updateStudent(id: number){
  this.router.navigate(['/updatestudent',id]);
}
deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe(data => {
    console.log(data);
    this.getStudent();
  })
}

}
