import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { logoutGuard } from './core/guards/logout.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/customer-area/customer-area.module').then(m => m.CustomerAreaModule) },
  { path: 'login', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule), data: { banner: false, header: false, footer: false } },
  { path: 'logout', loadChildren: () => import('./pages/customer-area/customer-area.module').then(m => m.CustomerAreaModule), canActivate: [logoutGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin-area/admin-area.module').then(m => m.AdminAreaModule), canActivate: [adminGuard] },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
