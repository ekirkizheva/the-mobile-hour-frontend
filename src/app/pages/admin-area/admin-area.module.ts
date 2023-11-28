import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminAreaRoutingModule } from './admin-area.routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule
  ]
})
export class AdminAreaModule { }
