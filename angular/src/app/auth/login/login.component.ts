import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  loader:any=document.getElementById("loader");

   constructor(private http:HttpClient,private loggedinservice:LoginService,private router:Router,private userdetails:UserdetailsService) {
     this.user.utype="user";
    }
  ngOnInit(): void {
   }
   email:string='';
    password!: string;
    utype: string="user";
   onSubmit(email: any,password: any,utype: any){
      this.email=email;
      this.password=password;
      this.utype=utype;
      return this.http.post("http://localhost:8080/"+utype+"/login", {
        "email": this.email,
        "password":this.password
      })
      .subscribe(
        (val: any) => {
          if(val=="-1")
          {
            alert("User not Found")

            this.router.navigateByUrl(`/${this.utype}/signup`);


          }
          else if(val=="-2")
          {
            alert("Invalid credentails")

            location.reload();


          }
          else{
            this.loggedinservice.setLoggedin();
            this.userdetails.setUserId(val);
            this.userdetails.setUserType(utype==="user"?"user":"admin");
            alert("Logged in successfully")
          this.router.navigateByUrl(`/${this.utype}/dashboard`);

        }
                },
              (response: any) => {
                alert("Unable to login ")
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
   }
   signup(utype:any){
     this.utype=utype;
    this.router.navigate([`/${this.utype}/signup`]);
   }
  

}


