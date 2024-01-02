import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminAreaRoutingModule } from './admin-area.routing.module';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChangeLogComponent,
    ManageUsersComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule
  ]
})
export class AdminAreaModule { }
