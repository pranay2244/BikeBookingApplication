import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bikeInterface } from '../user-side/bikeInterface';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  url:string="http://localhost:8080/user/bikes";
  obj!:bikeInterface;
  constructor(private http:HttpClient,private company:CompanyService) { 
   

  }
  makeApiCall(){
    return this.http.post(this.url, {
        "adminId": this.company.get().adminId.toString()
      });
  }
  get(){
    let x=sessionStorage.getItem('bike');
    this.obj=  (x!=null)?JSON.parse(x):null;
    return this.obj;
     
  }
  send(str:bikeInterface){
    sessionStorage.setItem('bike',JSON.stringify(str));
    this.obj=str;
  }
}
