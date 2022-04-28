import { TestBed } from '@angular/core/testing';

import { AcueilService } from './acueil.service';

describe('AcueilService', () => {
  let service: AcueilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcueilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
