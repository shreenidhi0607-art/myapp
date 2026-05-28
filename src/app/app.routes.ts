import { Routes } from '@angular/router';
import { Customer } from './customer/customer';

export const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: Customer },
];
