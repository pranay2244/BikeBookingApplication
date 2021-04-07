import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BikeService } from 'src/app/services/bike.service';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { bikeInterface } from '../bikeInterface';
import { companyInterface } from '../companyInterface';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
 
})
export class CompanyDetailsComponent implements OnInit {
  details: any;
  company!:companyInterface;
  constructor(private router:Router,private c:CompanyService,private bike:BikeService) {
  }

  ngOnInit(): void {
    this.company=this.c.get();
    this.bike.makeApiCall().subscribe(
      data=>{this.details=data;
      },
      (response: any) => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
  gotoBikeDetails(each: bikeInterface ){
    this.bike.send(each);
    this.router.navigate(['user/bikeDetail/'+each.bikeID]);

  }
}
