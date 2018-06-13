import { TestBed, inject } from '@angular/core/testing';

import { AdditionalserivcesService } from './additionalserivces.service';

describe('AdditionalserivcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditionalserivcesService]
    });
  });

  it('should be created', inject([AdditionalserivcesService], (service: AdditionalserivcesService) => {
    expect(service).toBeTruthy();
  }));
});
