import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

import { ManageUsersModifyComponent } from './manage-users-modify/manage-users-modify.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'manage-products', component: ManageProductsComponent},
    { path: 'manage-users', component: ManageUsersComponent},
    { path: 'manage-users/add', component: ManageUsersModifyComponent},
    { path: 'manage-users/:id', component: ManageUsersModifyComponent},
    { path: 'change-log', component: ChangeLogComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminAreaRoutingModule { }
