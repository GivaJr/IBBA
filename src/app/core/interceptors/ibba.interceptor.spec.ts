import { TestBed } from '@angular/core/testing';

import { IbbaInterceptor } from './ibba.interceptor';

describe('IbbaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IbbaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IbbaInterceptor = TestBed.inject(IbbaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
