import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { MockApi }  from './mock-api';

@Injectable()
export class SitesService {

  constructor(
    private mockApi: MockApi
  ) { }

  /**
   * checkSiteName: function to call API and check if a sitename is available.
   * uses mockApi, but would be replaced with http.
   * maps expected server responses of 200 OK and 409.
   * other errors map to ERROR.
   * @param siteName: string - the value to be checked
   * @returns Observable<string> status value of if available.
   */
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
