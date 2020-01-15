import { TestBed } from '@angular/core/testing';

import { CountryService } from './country-service.service';

describe('CountryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
