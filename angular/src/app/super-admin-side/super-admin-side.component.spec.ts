import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSideComponent } from './super-admin-side.component';

describe('SuperAdminSideComponent', () => {
  let component: SuperAdminSideComponent;
  let fixture: ComponentFixture<SuperAdminSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
