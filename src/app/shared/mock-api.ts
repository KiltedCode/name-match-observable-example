import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class MockApi {
    private takenSites: string[] = ['rhgeek', 'geek', 'geeks', 'realmenwherekilts'];
    private errorSite: string = 'thisisnotasite';

    constructor() { }

    siteValid(sitename: string): Observable<any> {
        if(sitename == this.errorSite) {
            return Observable.throw({status: 500});
        } else if(this.takenSites.indexOf(sitename) > -1) {
            return Observable.throw({status: 409});
        } else {
            return Observable.of({status: 200})
        }
        
    }

}
