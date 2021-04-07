import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.css']
})
export class UserSideComponent implements OnInit {

  constructor(private loggedInService:LoginService) { }

  ngOnInit(): void {

  }

}
