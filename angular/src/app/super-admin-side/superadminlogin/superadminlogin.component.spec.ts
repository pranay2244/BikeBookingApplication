import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminloginComponent } from './superadminlogin.component';

describe('SuperadminloginComponent', () => {
  let component: SuperadminloginComponent;
  let fixture: ComponentFixture<SuperadminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
