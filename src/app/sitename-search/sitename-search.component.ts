import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/share';

import { SitesService }  from '../shared/sites.service';

@Component({
  selector: 'rh-sitename-search',
  templateUrl: './sitename-search.component.html',
  styleUrls: ['./sitename-search.component.css']
})
export class SitenameSearchComponent implements OnInit {

  nameAvailable: Observable<string>;

  private siteNameTerms = new Subject<string>();

  constructor(
    private sitesService: SitesService,
  ) { }

  ngOnInit() {
    this.nameAvailable = this.siteNameTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
             ? this.sitesService.checkSiteName(term)
             : Observable.of<string>(''))
            .share();
  }

  /**
   * checkSiteAvailability: checks site name against API.
   * sets nameAvailable state.
   */
  checkSiteAvailability(term: string): void {
    this.siteNameTerms.next(term);
  }

}
