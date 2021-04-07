import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { adminDetails } from '../adminDetails';
import { bikeDetails } from '../bikeDetails';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  details!:bikeDetails[];
  company:adminDetails={
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
  totalEarnings:Number=0;
  url:string="http://localhost:8080/admin/dashboard";

  constructor(private http:HttpClient,private userDetails:UserdetailsService,private router:Router) {
    this.details=[
    ];
    this.getBikes();
   }

  ngOnInit(): void {
    this.http.post("http://localhost:8080/admin/profile",{
      "adminId":this.userDetails.getUserId().toString()

  },{responseType:'json'}).subscribe(data=>{
    console.log(data);
    this.company=<adminDetails>data;
  });
    this.getTotalPrice();
    this.getBikes();
  }
  edit(each:bikeDetails){
    this.router.navigate(['admin/editBike',each.bikeID]);
  }
  getBikes(){
    this.http.get(`${this.url}?adminId=${this.userDetails.getUserId()}`).subscribe(val=>{this.details=<bikeDetails[]>val;
    });
  }
  delete(each:bikeDetails){
    this.http.post("http://localhost:8080/admin/deleteBike",{
      "bikeID": each.bikeID.toString()
    },{responseType:'text'}).subscribe(data=>{
          if(data==='Bike Deleted'){
            alert("Deleted Successfully");
            location.reload();
          }
    },(response: any) => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }
  getTotalPrice(){
    this.http.get("http://localhost:8080/admin/getTotalEarnings?adminId="+this.userDetails.getUserId()).subscribe(
      data=>{
        this.totalEarnings=Number(data);
        console.log(data);

      }
    )
  }
}
