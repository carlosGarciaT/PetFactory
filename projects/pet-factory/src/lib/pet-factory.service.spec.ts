import { TestBed } from '@angular/core/testing';

import { PetFactoryService } from './pet-factory.service';

describe('PetFactoryService', () => {
  let service: PetFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
