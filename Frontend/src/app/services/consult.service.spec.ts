/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultService } from './consult.service';

describe('Service: Consult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultService]
    });
  });

  it('should ...', inject([ConsultService], (service: ConsultService) => {
    expect(service).toBeTruthy();
  }));
});
