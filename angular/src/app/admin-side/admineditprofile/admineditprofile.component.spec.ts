import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditprofileComponent } from './admineditprofile.component';

describe('AdmineditprofileComponent', () => {
  let component: AdmineditprofileComponent;
  let fixture: ComponentFixture<AdmineditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
