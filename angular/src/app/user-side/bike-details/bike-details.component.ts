import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { bikeInterface } from '../bikeInterface';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  url:string="http://localhost:8080/user/bikeDetails";
  imageurl:string="https://www.drivespark.com/images/2020-07/2020-bmw-s-1000-xr-30.jpg";
  bike:bikeInterface;
  constructor(private bikeService:BikeService,private http:HttpClient,private router:Router,private userdetails:UserdetailsService) {
    this.Apicall();
    this.bike=this.bikeService.get();
    
   }

  ngOnInit(): void {
    this.Apicall()

  }
  Apicall(){
     this.http.post(this.url, {
      "bikeId": this.bikeService.get().bikeID.toString()
    }).subscribe(data=>this.bike=<bikeInterface>data);
  }
  bookBike(){
    return this.http.post("http://localhost:8080/user/bookBike", {
           "bikeId" :this.bike.bikeID.toString(),
           "userId": this.userdetails.getUserId().toString()
            },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  if(val=="Bike Booked"){
                  alert("Bike Booked successfully");
                  this.router.navigate(['user/dashboard']);}
                  else{
                    alert("Unable to book bike");
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
