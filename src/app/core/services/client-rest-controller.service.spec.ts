import { TestBed, inject } from '@angular/core/testing';

import { ClientRestControllerService } from './client-rest-controller.service';

describe('ClientRestControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRestControllerService]
    });
  });

  it('should be created', inject([ClientRestControllerService], (service: ClientRestControllerService) => {
    expect(service).toBeTruthy();
  }));
});
