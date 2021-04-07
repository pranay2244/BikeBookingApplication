import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;
  constructor() {
    this.loggedIn = JSON.parse(sessionStorage.getItem("loggedIn") || "false");
  }
  get(){
    return this.loggedIn;
  }
  setLoggedin() {
    sessionStorage.setItem("loggedIn", "true");
    this.loggedIn = true;
  }
}
