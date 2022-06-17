import { TestBed } from '@angular/core/testing';

import { WcApiService } from './wc-api.service';

describe('WcApiService', () => {
  let service: WcApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
