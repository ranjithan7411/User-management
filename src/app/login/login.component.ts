import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  
  changeView(){
     this.isVisible = false
   }

}
