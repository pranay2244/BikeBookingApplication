
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { userbookings } from '../userBookings';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrls: ['./userbookings.component.css']
})
export class UserbookingsComponent implements OnInit {
  details:userbookings[];
  constructor(private http:HttpClient,private router:Router,private userdetails:UserdetailsService) {
    this.details=[];
    this.makeApiCall();
   }

  ngOnInit(): void {
    this.makeApiCall();
  }
  makeApiCall(){
    this.http.post("http://localhost:8080/user/bookings",{
      "userId":this.userdetails.getUserId().toString()

    },{responseType:"json"}).subscribe(data=>{
      this.details=<userbookings[]>data ;
    });
  }

}