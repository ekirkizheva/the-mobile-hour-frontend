import { Component } from '@angular/core';
import { naviationMenu } from './constants/navigatoin-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  menu = naviationMenu;
  
  isMenuDropDownVisible = false;

 toggleMenu() {
  this.isMenuDropDownVisible = !this.isMenuDropDownVisible;
 }
}
