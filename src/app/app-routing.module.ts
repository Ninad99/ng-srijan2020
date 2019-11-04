import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { TeamComponent } from './components/team/team.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'team', component: TeamComponent },
  { path: 'sponsors', component: SponsorsComponent},
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
