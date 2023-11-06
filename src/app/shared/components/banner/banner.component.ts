import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  /**
   * Controls banner visibility.
   */
  isBannerVisible = true;

  /**
   * Hides banner. 
   */
  hide() {
    this.isBannerVisible = false;
  }
}
