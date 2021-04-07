import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  usertype:string='-1';
  userid:string='-1';
  constructor() {
    this.getUserType();
   }
  setUserId(x:string){
      sessionStorage.setItem("userId",x);
  }
  setUserType(x:string){
    sessionStorage.setItem("usertype",x);

  }
  getUserId(){
    this.userid=sessionStorage.getItem("userId")||"-1";
    return sessionStorage.getItem("userId")||"-1";
  }
  getUserType(){
    this.usertype=sessionStorage.getItem("usertype")||"-1";
    return sessionStorage.getItem("usertype")||"-1";
    

  }
}
