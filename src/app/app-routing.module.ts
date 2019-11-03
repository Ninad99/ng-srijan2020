import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
