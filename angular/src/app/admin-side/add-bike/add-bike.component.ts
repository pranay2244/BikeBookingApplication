import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-addbike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {
  user: User = new User;
  constructor(private http:HttpClient,private userDetails:UserdetailsService,private router:Router) {
  }
  ngOnInit(): void {
  }
  bikeModel!: string;
  bikeType!: string;
  bikePrice!: string;
  onSubmit(bikeModel: string,bikePrice: string,bikeType: string){
    this.bikeModel=bikeModel;
    this.bikePrice=bikePrice;
    this.bikeType=bikeType;
    return this.http.post("http://localhost:8080/admin/addBike", {
        bikeNo:this.bikeModel,
        adminID:this.userDetails.getUserId(),
        status:"Available",
        type:this.bikeType,
        price:this.bikePrice
      },{responseType:'text'})
            .subscribe(
                (val: any) => {
                  alert("Bike added successfully");
                  this.router.navigateByUrl('admin/dashboard');
                  console.log(val);
                    console.log("POST call successful value returned in body", val);
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
