import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from 'src/app/shared/constants/products.mock';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor() { }

  get products$(): Observable<Product[]> {
    return of(Object.values(MOCK_PRODUCTS));
  }
}
