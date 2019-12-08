import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { TeamComponent } from './components/team/team.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

const routes: Routes = [
  { path: 'reconnect', component: SubscribeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'team', component: TeamComponent },
  { path: 'sponsors', component: SponsorsComponent},
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
