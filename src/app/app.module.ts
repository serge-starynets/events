import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ConcertsAppComponent } from './concerts-app.component';
import { ConcertsListComponent } from './concerts/concerts-list.component';
import { ConcertThumbnailComponent } from './concerts/concert-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    ConcertsAppComponent,
    ConcertsListComponent,
    ConcertThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ConcertsAppComponent]
})
export class AppModule { }
