import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'companies',
    component: CompaniesListComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', redirectTo: '/companies' },
];
