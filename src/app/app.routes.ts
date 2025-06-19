import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  	//Chemin de la route, composant lié
  { path: '', component: HomeComponent },

  { path: '**', redirectTo: '' }// Route wildcard pour 404
];
