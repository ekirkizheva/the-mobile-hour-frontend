import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/customer-area/customer-area.module').then(m => m.CustomerAreaModule) },
  { path: 'login', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule), data: { banner: false, header: false, footer: false } },
  // { path: 'admin', loadChildren: () => import('./pages/admin-area/admin-area.module').then(m => m.AdminAreaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
