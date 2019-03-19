import { TestBed } from '@angular/core/testing';

import { BioRouterService } from './bio-router.service';

describe('BioRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioRouterService = TestBed.get(BioRouterService);
    expect(service).toBeTruthy();
  });
});
