import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bikeDetails } from '../bikeDetails';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-editbike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  user: User = new User;
  url:string=""
  userService: any;
  li:any;
  bike:bikeDetails={
    "bikeID":"string",
    "bikeNo":"string",
    "adminID":"string",
    "status":"string",
    "type":"string",
    "price":"string"
  };
  lis:User[]=[];
     constructor(private http : HttpClient,private router:Router){
      let x=this.router.url.split('/');

      this.http.get(`http://localhost:8080/admin/bikeDetails?bikeId=${x[x.length-1]}`)
      .subscribe(Response => {
        this.bike=<bikeDetails> Response;
       
      });
     } 
     ngOnInit(): void {
       let x=this.router.url.split('/');

       this.http.get(`http://localhost:8080/admin/bikeDetails?bikeId=${x[x.length-1]}`)
       .subscribe(Response => {
         this.bike=<bikeDetails> Response;
        
       });
      
     }
  bikeModel!: string;
  bikeType!: string;
  bikePrice!: string;
  onSubmit(bikeModel: any,bikePrice: any,bikeType: any){
    this.bikeModel=this.bike.bikeNo;
    this.bikePrice=this.bike.price;
    this.bikeType=this.bike.type;
    return this.http.post("http://localhost:8080/admin/editBike", {
            "bikeID":this.bike.bikeID,
            "bikeNo":this.bikeModel,
            "adminID":this.bike.adminID,
            "status":this.bike.status,
            "type":this.bikeType,
            "price": this.bikePrice
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  alert("Bike edited successfully");
                  this.router.navigate(['admin/dashboard']);
                },
              (response: any) => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
  }
  onBack(){
    this.router.navigateByUrl('/admin/dashboard');
  }
}
