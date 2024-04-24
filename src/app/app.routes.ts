import { Routes } from '@angular/router';
import { PageLoginComponent } from './core/page-login/page-login.component';


export const routes: Routes = [
  {path: '',  component: PageLoginComponent},
  {path: 'agencias', loadChildren:() => import('./agencies/agencies.module').then((m) => m.AgenciesModule)}
];
