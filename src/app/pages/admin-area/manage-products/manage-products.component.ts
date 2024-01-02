import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { ManageProductsService } from './manage-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent {

  // Preserve original property order
  originalOrder = (...args: any): number => 0;

  products$: Observable<Product[]>;

  constructor(private manageProductService: ManageProductsService) {
    this.products$ = this.manageProductService.products$;
  }

}
