import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() thisCompany:any;
  constructor() { }

  ngOnInit(): void {
  }

}
