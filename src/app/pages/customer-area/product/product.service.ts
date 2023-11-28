import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from 'src/app/shared/constants/products.mock';
import { Product, Products } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /**
   * Returns product by its id.
   * @param id - requires product id.
   */
  getProductById$(id: number): Observable<Product> {
    return of(MOCK_PRODUCTS[id]);
  }
}
