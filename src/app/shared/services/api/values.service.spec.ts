import { TestBed, inject } from '@angular/core/testing';

import { ValuesService } from './values.service';

describe('ValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValuesService]
    });
  });

  it('should be created', inject([ValuesService], (service: ValuesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([ValuesService], (service: ValuesService) => {
    service.getValues().subscribe((data: any[]) => {
        expect(data.length).toBeGreaterThan(0);
      });
  }));
});
