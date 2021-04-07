import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user: User ;
 image:string='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';
 li:any;
  lis:User[]=[];
  Name:any;
  Email:any;
  Password:any;
  Age:any;
  MobileNumber:any;

  constructor(private http : HttpClient,private userdetails:UserdetailsService,private router:Router){
   this.user ={
      userId:'string',
      age: "string",
      email: "string",
      mobileNumber: "string",
      password: "string",
      userRole: "string",
      username: "string"};
    this.makeApiCall();
  } 
  passwordString:string='';
  ngOnInit(): void {
    this.makeApiCall();
    
     }
     makeApiCall(){
      this.http.post("http://localhost:8080/user/getProfile",{
        "userId":this.userdetails.getUserId().toString()

    },{responseType:'json'}).subscribe(data=>{
      this.user=<User>data;
      this.passwordString='*******'
    });
    
    }
    goToEdit(){
      this.router.navigateByUrl("/user/editProfile");
    }


  
}

