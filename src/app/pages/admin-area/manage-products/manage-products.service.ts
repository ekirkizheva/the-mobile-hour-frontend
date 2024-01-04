import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor() { }

  get products$(): Observable<Product[]> {
    return of([]);
    //return of(Object.values(MOCK_PRODUCTS)) as Observable<Product[]>;
  }
}
