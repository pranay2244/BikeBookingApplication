import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User;
   constructor(private http:HttpClient,private router:Router) {
    }
   text:any="user";
   show: boolean = true;
  ngOnInit(): void {
    let url=this.router.url.split('/');
    this.user.Userrole=url[url.length-2]==="admin"?"2":"1";
    this.onChange(Number(this.user.Userrole));
   }
   email:string='';
    password!: string;
    Phonenumber!: string;
    Userrole!: string;
    Username!: string;
    Age!: string;
    Sellername!: string;
    Companyname!: string;
    Imageurl!: string;
    Companyaddress!: string;
   onSubmit(email: any,password: any,Phonenumber: any,Userrole: any,Username: any,age: any){
      this.email=email;
      this.password=password;
      this.Phonenumber=Phonenumber;
      this.Username=Username;
      this.Age=age;
      if(Userrole=="1"){
        this.Userrole="User";
      }else{
        this.Userrole="Admin";
      }
      return this.http.post("http://localhost:8080/user/signup", {
              "email": this.email,
              "password":this.password,
              "mobileNumber":this.Phonenumber,
              "userRole":this.Userrole,
              "username":this.Username,
              "age":this.Age
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=='User added'){
                  alert("Sign up succesful");
                  this.router.navigate(['/login']);
                }
                else{
                  alert("User already exists");
                  this.router.navigate(['/login']);
                }
                },
              (response: any) => {
                    alert("Unable to signup");
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
   }
   onSubmit1(email: any,password: any,Phonenumber: any,Userrole: any,Sellername: any,Companyname: any,Imageurl: any,Companyaddress: any){
      this.email=email;
      this.password=password;
      this.Phonenumber=Phonenumber;
      this.Sellername=Sellername;
      this.Companyname=Companyname;
      this.Imageurl=Imageurl;
      this.Companyaddress=Companyaddress;
      if(Userrole==1){
        this.Userrole="User";
      }else{
        this.Userrole="Admin";
      }
       return this.http.post("http://localhost:8080/admin/signup",{
              "email": this.email,
              "password":this.password,
              "mobileNumber":this.Phonenumber,
              "userRole":this.Userrole,
              "sellerName":this.Sellername,
              "companyName":this.Companyname,
              "companyImageURL":this.Imageurl,
              "companyAddress":this.Companyaddress,
              "earnings":"1000"
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=='Admin added'){
                    alert("Sign up successful");
                    this.router.navigate(['/login']);
                  }
                  else{
                    alert("Admin already exists");
                  }
                },
              (response: any) => {
                alert("Unable to signup");
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
        }

   onChange(e:Number){
     if(e==1){
        this.show=true;
     }else{
       this.show=false;
     }
   }
   gotoLogin(){
     this.router.navigateByUrl('/login');
   }
}