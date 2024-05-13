import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }
];
