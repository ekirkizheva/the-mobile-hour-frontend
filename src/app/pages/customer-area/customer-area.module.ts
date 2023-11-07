import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAreaRoutingModule } from './customer-area-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CustomerAreaRoutingModule,
    SharedModule
  ]
})
export class CustomerAreaModule { }
