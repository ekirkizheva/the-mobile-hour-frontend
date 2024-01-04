import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() size = '1rem';

  @Input() imageUrl = '';

  @Input() brand = '';

  @Input() label = '';

  @Input() price: string | number = '';

  @Input() cta = '';

}
