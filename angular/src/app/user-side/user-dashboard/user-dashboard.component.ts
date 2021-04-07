import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { companyInterface } from '../companyInterface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  details:companyInterface[]=[];
  constructor(private router:Router,private company:CompanyService,private loggedInService:LoginService) { 
  }
  navigateToCompany(each:companyInterface){
    this.company.send(each);
    this.router.navigate(['/user/companyDetail/',each.companyId],{state:{company:each}});

  }
  ngOnInit(): void {
    this.company.makeApiCall().subscribe(
      data=>{ this.details=data;
      }
    );
  }

}
