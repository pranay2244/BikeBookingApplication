import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNavbarComponent } from './super-admin-navbar.component';

describe('SuperAdminNavbarComponent', () => {
  let component: SuperAdminNavbarComponent;
  let fixture: ComponentFixture<SuperAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
