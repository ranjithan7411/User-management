import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Contactus2Component } from './contactus2/contactus2.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { RoomComponent } from './room/room.component';

import { ViewroomComponent } from './viewroom/viewroom.component';
import { DeleteroomComponent } from './deleteroom/deleteroom.component';
import { EditroomComponent } from './editroom/editroom.component';
import { FoodComponent } from './food/food.component';
import { FoodupdateComponent } from './foodupdate/foodupdate.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { PhotoComponent } from './photo/photo.component';
import { Photo2Component } from './photo2/photo2.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { Food2Component } from './food2/food2.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},

  {path:"updateprofile",component:UpdateprofileComponent},
  {path:"updateprofile/:id",component:UpdateprofileComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"contactus2",component:Contactus2Component},
  {path:"createstudent",component:CreatestudentComponent},
  {path:"viewstudent",component:ViewstudentComponent},
  {path:"updatestudent",component:UpdatestudentComponent},
  {path:"updatestudent/:id",component:UpdatestudentComponent},
  {path:"deletestudent",component:DeletestudentComponent},
  {path:"room",component:RoomComponent},

  {path:"viewroom",component:ViewroomComponent},
  {path:"deleteroom",component:DeleteroomComponent},
  {path:"editroom",component:EditroomComponent},
  {path:"editroom/:id",component:EditroomComponent},
  {path:"food",component:FoodComponent},
  {path:"foodupdate/:id",component:FoodupdateComponent},
  {path:"about1",component:About1Component},
  {path:"about2",component:About2Component},
  {path:"photo",component:PhotoComponent},
  {path:"photo2",component:Photo2Component},
  {path:"userlogin",component:UserloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"createadmin",component:CreateadminComponent},
  {path:"createuser",component:CreateuserComponent},
  {path:"studentnavbar",component:StudentnavbarComponent},

  {path:"profile",component:ProfileComponent},
  {path:"food2",component:Food2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
