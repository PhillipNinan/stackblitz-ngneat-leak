import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  Route,
  RouterOutlet,
  provideRouter,
  RouterLink,
} from '@angular/router';
import 'zone.js';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a [routerLink]="['']">Component A </a>
    <a [routerLink]="['/compb']">Component B</a>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

const AppRoutes: Route[] = [
  {
    path: '',
    component: ComponentA,
  },
  {
    path: 'compb',
    component: ComponentB,
  },
];
bootstrapApplication(App, {
  providers: [provideRouter(AppRoutes)],
});
