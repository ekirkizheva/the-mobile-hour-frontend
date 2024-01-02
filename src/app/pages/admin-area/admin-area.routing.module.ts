import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeLogComponent } from './change-log/change-log.component';
import { HomeComponent } from './home/home.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'manage-products', component: ManageProductsComponent},
    { path: 'manage-users', component: ManageUsersComponent},
    { path: 'change-log', component: ChangeLogComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminAreaRoutingModule { }
