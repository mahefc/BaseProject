import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }


export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",pathMatch:"full",redirectTo:'home'},
  {path:"**",redirectTo:'home'},
];


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
