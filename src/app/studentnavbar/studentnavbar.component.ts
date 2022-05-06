import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentnavbar',
  templateUrl: './studentnavbar.component.html',
  styleUrls: ['./studentnavbar.component.css']
})
export class StudentnavbarComponent implements OnInit {

  imgVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.imgVisible = false
  }

}
