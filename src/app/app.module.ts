import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsListComponent, 
         EventThumbnailComponent, 
         EventService, 
         EventDetailsComponent, 
         CreateEventComponent,
         CreateSessionComponent,
         SessionListComponent,
         EventRouteActivator,
         EventListResolver } from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    {provide: 'canDeactivateCreateEvent', useValue: CheckDirtyState}, 
    EventListResolver, 
    AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(component: CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
