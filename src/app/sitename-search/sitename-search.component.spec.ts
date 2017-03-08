/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { SitenameSearchComponent } from './sitename-search.component';
import { SitesService }  from '../shared/sites.service';
import { MockApi }  from '../shared/mock-api';

describe('SitenameSearchComponent', () => {
  let component: SitenameSearchComponent;
  let fixture: ComponentFixture<SitenameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SitenameSearchComponent ],
      providers:[ SitesService, MockApi ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitenameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have define a function named checkSiteAvailability', () => {
    expect(component.checkSiteAvailability).toBeDefined();
  });

  it('should have a nameAvailable of type Observable', () => {
    component.ngOnInit();
    expect(component.nameAvailable).toBeDefined();
    expect(component.nameAvailable instanceof Observable).toBe(true);
  });

});
