import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllBookings } from '../AllBookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  details:AllBookings[];
  constructor(private http:HttpClient,private router:Router) {
    this.details=[];
    this.makeApiCall();
   }

  ngOnInit(): void {

  }
  makeApiCall(){
    this.http.get("http://localhost:8080/super/getBookings",{responseType:'json'}).subscribe(data=>{this.details=<AllBookings[]>data;
  });
  }
}
