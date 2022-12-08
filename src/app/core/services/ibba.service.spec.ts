import { TestBed } from '@angular/core/testing';

import { IbbaService } from './ibba.service';

describe('IbbaService', () => {
  let service: IbbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
