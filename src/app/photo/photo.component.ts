import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgVisible=true;
  

  
  changeView(){
    this.imgVisible = false
  }

}

