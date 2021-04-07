import { TestBed } from '@angular/core/testing';

import { SuperAdminAuthGaurdService } from './super-admin-auth-gaurd.service';

describe('SuperAdminAuthGaurdService', () => {
  let service: SuperAdminAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdminAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
