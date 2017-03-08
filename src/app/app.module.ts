import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SitenameSearchComponent } from './sitename-search/sitename-search.component';
import { SitesService } from './shared/sites.service';
import { MockApi } from './shared/mock-api';

@NgModule({
  declarations: [
    AppComponent,
    SitenameSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SitesService,
    MockApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
