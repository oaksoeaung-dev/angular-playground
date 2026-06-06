import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'input-properties',
    loadComponent: () => import('./input-properties/input-properties').then((c) => c.InputProperties),
  },
  {
    path: 'content-projection',
    loadComponent: () => import('./content-projection/content-projection').then((c) => c.ContentProjection),
  },
  {
    path: 'component-selector',
    loadComponent: () => import('./component-selector/component-selector').then((c) => c.ComponentSelector),
  },
  {
    path: 'lifecycle',
    loadComponent: () => import('./lifecycle/lifecycle').then((c) => c.Lifecycle),
  },
];
