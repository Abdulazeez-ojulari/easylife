import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightsComponent } from './flights/flights.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { EventsComponent } from './events/events.component';
import { LagosAbujaComponent } from './flights/results/lagos-abuja/lagos-abuja.component';
import { CarsFoundComponent } from './cars/cars-results/cars-found/cars-found.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { HotelsAvailableComponent } from './hotels/hotels-available/hotels-available.component';
import { environment } from '../environments/environment';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightsComponent,
    FooterComponent,
    HotelsComponent,
    CarsComponent,
    EventsComponent,
    LagosAbujaComponent,
    CarsFoundComponent,
    ProjectGalleryComponent,
    HotelsAvailableComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage

    RouterModule.forRoot([
      { path: '', component: FlightsComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'results/lagos-abuja', component: LagosAbujaComponent },
      { path: 'cars/available', component: CarsFoundComponent },
      { path: 'hotels/available', component: HotelsAvailableComponent },
      { path: 'project-gallery', component: ProjectGalleryComponent }  
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
