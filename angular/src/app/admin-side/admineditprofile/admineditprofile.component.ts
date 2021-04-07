import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';
import { adminDetails } from '../adminDetails';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admineditprofile',
  templateUrl: './admineditprofile.component.html',
  styleUrls: ['./admineditprofile.component.css']
})

export class AdmineditprofileComponent implements OnInit {
  user: adminDetails={
    adminId:"string",
    email:"string",
    password:"string ",
    mobileNumber:"string ",
    earnings:"string ",
    sellerName:"string ",
    userRole:"string ",
    companyName:"string",
    companyImageURL:"string",
    companyAddress:"string ",
  } ; 
     constructor(private http : HttpClient,private router:Router,private userdetails:UserdetailsService){
       this.getUserDetails();
     } 
     ngOnInit(): void {
      this.getUserDetails();
     }
  onSubmit(){
     this.http.post("http://localhost:8080/admin/editProfile", {
      adminId:Number(this.user.adminId),
      email:this.user.email,
      password:this.user.password,
      mobileNumber:this.user.mobileNumber,
      earnings:Number(this.user.earnings),
      sellerName:this.user.sellerName,
      userRole:this.user.userRole,
      companyName:this.user.companyName,
      companyImageURL:this.user.companyImageURL,
      companyAddress:this.user.companyAddress,
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=="Profile Updated"){
                  alert("Profile edited successfully");
                  this.onBack();
                }
                else{
                  alert('Unable to edit');
                }

                },
              (response: any) => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
  }
  onBack(){
    this.router.navigate(['admin/profile/',this.userdetails.getUserId()]);
  }
  getUserDetails(){
    this.http.post("http://localhost:8080/admin/profile",{
      "userId":this.userdetails.getUserId().toString()

  },{responseType:'json'}).subscribe(data=>{
    this.user=<adminDetails>data;
  });
  }
  isDisabled(){
    let x:boolean =(this.user.password.length<8   || this.user.mobileNumber.length<10);
    return x;
  }
}









