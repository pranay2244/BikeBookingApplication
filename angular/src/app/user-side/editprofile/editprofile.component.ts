import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {
  user: User={
    userId:'string',
    age: "string",
  email: "string",
  mobileNumber: 'string',
  password: "string",
  userRole: "string",
  username: "string"
  } ; 
     constructor(private http : HttpClient,private router:Router,private userdetails:UserdetailsService){
       this.getUserDetails();
     } 
     ngOnInit(): void {
      this.getUserDetails();
     }
     Name!: string;
     Email!: string;
     Password!: string;
     Age!: string;
     MobileNumber!:string;
  onSubmit(Name: any,Email: any,Password: any,Age:any,MobileNumber:any){
    this.Name=Name;
    this.Email=Email;
    this.Password=Password;
    this.Age=Age;
    this.MobileNumber=MobileNumber;
     this.http.post("http://localhost:8080/user/editProfile", {
              "userId":this.userdetails.getUserId(),
              "username": this.user.username,
              "email":this.user.email,
              "password":this.user.password,
              "age":this.user.age,
              "mobileNumber":this.user.mobileNumber,
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=="User Edited"){
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
    this.router.navigate(['user/profile/',this.userdetails.getUserId()]);
  }
  getUserDetails(){
    this.http.post("http://localhost:8080/user/getProfile",{
      "userId":this.userdetails.getUserId().toString()

  },{responseType:'json'}).subscribe(data=>{
    this.user=<User>data;
  });
  }
  isDisabled(){
    let x:boolean =(this.user.password.length<8   || this.user.mobileNumber.length<10);
    return x;
  }
}








