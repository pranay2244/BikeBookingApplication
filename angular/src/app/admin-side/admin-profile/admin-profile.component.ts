import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { adminDetails } from '../adminDetails';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
 user: User = new User;
 image:string='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';
 passwordString:string=''; 
 details:adminDetails={
    adminId:" ",
    email:" ",
    password:" ",
    mobileNumber:" ",
    earnings:" ",
    sellerName:" ",
    userRole:" ",
    companyName:" ",
    companyImageURL:" ",
    companyAddress:" ",

  };
 li:any;
  lis:User[]=[];
  Name:any;
  Email:any;
  Password:any;
  Age:any;
  MobileNumber:any;
  CompanyName:any;
  CompanyAddress:any;
  url:string="https://telanganatoday.com/wp-content/uploads/2021/02/Virtusa.jpg";

  constructor(private http : HttpClient,private userdetails:UserdetailsService,private router:Router){
    this.makeApiCall();
  
  } 
  
  ngOnInit(): void {
      this.makeApiCall();
     }
     makeApiCall(){

       this.http.post("http://localhost:8080/admin/profile",{
         "adminId":this.userdetails.getUserId().toString()

     },{responseType:'json'}).subscribe(data=>{
       this.details=<adminDetails>data;
       this.passwordString='*******'
     });
     }
     goToEdit(){
       this.router.navigateByUrl('admin/editProfile')
     }


  
}
