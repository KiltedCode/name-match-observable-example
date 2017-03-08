/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SitesService } from './sites.service';
import { MockApi }  from './mock-api';

describe('SitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitesService, MockApi]
    });
  });

  it('should have a defined service', inject([SitesService, ], (service: SitesService) => {
    expect(service).toBeDefined();
  }));

  it('should have define a function named checkSiteName', inject([SitesService, ], (service: SitesService) => {
    expect(service.checkSiteName).toBeDefined();
  }));
});
