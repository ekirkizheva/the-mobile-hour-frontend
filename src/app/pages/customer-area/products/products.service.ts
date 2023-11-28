import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_BRANDS } from 'src/app/shared/constants/brands.mock';
import { MOCK_PRODUCTS } from 'src/app/shared/constants/products.mock';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  get brands$(): Observable<string[]> {
    return of(MOCK_BRANDS);
  }

   get products$(): Observable<Product[]> {
    return of(Object.values(MOCK_PRODUCTS));
   }
}
