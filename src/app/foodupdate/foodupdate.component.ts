import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodserviceService } from '../foodservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './foodupdate.component.html',
  styleUrls: ['./foodupdate.component.css']
})
export class FoodupdateComponent implements OnInit {
  signupForm: any;
  "id": number;
  foods: Food= new Food();

  constructor(private foodservice: FoodserviceService,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id'];
    this.foodservice.getFoodById(this.id).subscribe(data => {
      this.foods= data;
    })
  }
  saveStudent(){
   // this.foodservice..createStudent(this.students).subscribe(data => {
     // console.log(data);
      this.gotoFoodList();
    
    
  }

  gotoFoodList(){
      this.router.navigate(['/food']);
  }

  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }

  onSubmit(){
    this.foodservice.updateFood(this.id,this.foods).subscribe(data => {
      this.gotoFoodList();
    })
    console.log(this.foods);
    this.saveStudent();

  }

}
