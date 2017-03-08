import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { MockApi }  from './mock-api';

@Injectable()
export class SitesService {

  constructor(
    private mockApi: MockApi
  ) { }

  checkSiteName(siteName: string): Observable<string> {
    return this.mockApi.siteValid(siteName)
              .map((r: any) => 'YES')
              .catch(error => {
                  if(error.status==409) {
                      return Observable.of<string>('NO');
                  } else {
                      return Observable.of<string>('ERROR');
                  }
              });
    }

}
