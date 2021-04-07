import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminModel } from 'src/app/models/adminModel';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  allUsers:adminModel[]=[];
  constructor(private router:Router,private http:HttpClient) { 
  }
  ngOnInit(): void {
    this.makeApiCall();
  }
  makeApiCall(){
    this.http.get("http://localhost:8080/super/dashboard").subscribe(data=>{
        this.allUsers=<adminModel[]>data;
    });
    
  }
  delete(each:adminModel){
    this.http.post("http://localhost:8080/super/deleteAdmin",{
      "emailId":each.email.toString()
    },{responseType:'text'}).subscribe(data=>{
        if(data=="Admin Deleted") {
            alert("Admin Deleted successfully");
            location.reload();
        }

    });
  }
}
