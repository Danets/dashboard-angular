import { Routes } from '@angular/router';
import { Account } from './pages/account/account';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'account', component: Account },
  { path: '**', component: Dashboard },
];
