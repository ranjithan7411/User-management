import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { FoodserviceService } from './foodservice.service';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { DeleteroomComponent } from './deleteroom/deleteroom.component';
import { EditroomComponent } from './editroom/editroom.component';
import { RoomComponent } from './room/room.component';
import { FoodComponent } from './food/food.component';
import { FoodupdateComponent } from './foodupdate/foodupdate.component';
import { About1Component } from './about1/about1.component';
import { PhotoComponent } from './photo/photo.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { CreateadminComponent } from './createadmin/createadmin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { ProfileComponent } from './profile/profile.component';

import { About2Component } from './about2/about2.component';
import { Contactus2Component } from './contactus2/contactus2.component';
import { Photo2Component } from './photo2/photo2.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { Food2Component } from './food2/food2.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
    ViewstudentComponent,
        CreatestudentComponent,
         UpdatestudentComponent,
         DeletestudentComponent,
         
         ViewroomComponent,
         DeleteroomComponent,
         EditroomComponent,
         RoomComponent,
         FoodComponent,
         FoodupdateComponent,
         About1Component,
         PhotoComponent,
         LoginComponent,
         UserloginComponent,
         AdminloginComponent,
         CreateadminComponent,
         CreateuserComponent,
         StudentnavbarComponent,
         ProfileComponent,
         
         About2Component,
         Contactus2Component,
         Photo2Component,
         UpdateprofileComponent,
         Food2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [FoodserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
