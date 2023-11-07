import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { IconComponent } from './components/icon/icon.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    IconComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    IconComponent
  ]
})
export class SharedModule { }
