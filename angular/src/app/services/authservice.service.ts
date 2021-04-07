import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserdetailsService } from './userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public loggedin:Observable<string>;
  public userType:Observable<string>;
  constructor(private userdetails:UserdetailsService) { 
    this.loggedin = of(sessionStorage.getItem("loggedIn") || "false");
    this.userType = of(sessionStorage.getItem("usertype") || "-1");
    this.userType =  of(this.userdetails.usertype);
  }
  get(){
    this.loggedin = of(sessionStorage.getItem("loggedIn") || "false");
    return this.loggedin;
  }
  getUser(){
    this.userType = of(sessionStorage.getItem("usertype") || "-1");
    this.userType.subscribe(val=>console.log(val));
    return this.userType;

  }
}
