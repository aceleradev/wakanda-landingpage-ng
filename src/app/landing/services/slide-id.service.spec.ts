import { TestBed, inject } from '@angular/core/testing';

import { SlideIdService } from './slide-id.service';

describe('SlideIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideIdService]
    });
  });

  it('should be created', inject([SlideIdService], (service: SlideIdService) => {
    expect(service).toBeTruthy();
  }));
});
