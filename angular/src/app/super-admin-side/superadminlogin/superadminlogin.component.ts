import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/admin-side/shared/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-superadminlogin',
  templateUrl: './superadminlogin.component.html',
  styleUrls: ['./superadminlogin.component.css']
})
export class SuperadminloginComponent implements OnInit {
  user: User = new User;
   constructor(private http:HttpClient,private router:Router,private loggedinservice:LoginService,private userdetails:UserdetailsService) {
    }
  ngOnInit(): void {
   }
   email:string='';
    password!: string;
    
   onSubmit(email: any,password: any){
      this.email=email;
      this.password=password;
      return this.http.post("http://localhost:8080/super/login", {
              "email": this.email,
              "password":this.password,
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=="true"){
                    alert("Logged in successfully");
                    this.loggedinservice.setLoggedin();
                    this.userdetails.setUserType("superAdmin");
                    this.router.navigateByUrl('/superadmin/adminList');
                    
                  }
                  else{
                    alert("Email and password didn't match")
                  }
                },
              (response: any) => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
   }
}


