import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-super-admin-navbar',
  templateUrl: './super-admin-navbar.component.html',
  styleUrls: ['./super-admin-navbar.component.css']
})
export class SuperAdminNavbarComponent implements OnInit {

  constructor(private logoutservice:LogoutService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.logoutservice.logout();
    this.router.navigateByUrl('/superadmin/login');
}
}
