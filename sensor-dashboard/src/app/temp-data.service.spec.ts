import { TestBed, inject } from '@angular/core/testing';

import { TempDataService } from './temp-data.service';

describe('TempDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempDataService]
    });
  });

  it('should be created', inject([TempDataService], (service: TempDataService) => {
    expect(service).toBeTruthy();
  }));
});
