/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerService } from './Server.service';

describe('Service: Server', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerService]
    });
  });

  it('should ...', inject([ServerService], (service: ServerService) => {
    expect(service).toBeTruthy();
  }));
});
