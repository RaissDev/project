import { TestBed } from '@angular/core/testing';

import { AdminServerService } from './admin-server.service';

describe('AdminServerService', () => {
  let service: AdminServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
