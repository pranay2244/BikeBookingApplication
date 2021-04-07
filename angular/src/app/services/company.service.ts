import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companyInterface } from '../user-side/companyInterface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url:string="http://localhost:8080/user/dashboard";
  obj!:companyInterface;
  constructor(private http:HttpClient) { 
   

  }
  makeApiCall() : Observable<companyInterface[]>  {
    return this.http.get<companyInterface[]>(this.url);
  }
  get(){
    let x=sessionStorage.getItem('company');
     return  (x!=null)?JSON.parse(x):null;
     this.obj;
  }
  send(str:companyInterface){
    sessionStorage.setItem('company',JSON.stringify(str));
    this.obj=str;
  }
}
