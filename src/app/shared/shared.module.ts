import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BannerComponent,
    MainMenuComponent
  ]
})
export class SharedModule { }
