import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router :Router,private logoutservice:LogoutService,private userdetails:UserdetailsService) { }

  ngOnInit(): void {
  }
  logout(){
      this.logoutservice.logout();
      this.router.navigateByUrl('/login');
  }
  profile(){
    this.router.navigate(['/user/profile/',this.userdetails.getUserId().toString()]);
  }
  

}
