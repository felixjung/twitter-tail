/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitterServiceService } from './twitter-service.service';

describe('Service: TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterServiceService]
    });
  });

  it('should ...', inject([TwitterServiceService], (service: TwitterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
