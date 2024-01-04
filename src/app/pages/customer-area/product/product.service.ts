import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * Returns product by its id.
   * @param id - requires product id.
   */
  getProductById$(id: number): Observable<Product> {

    return this.http.get<Product[]>(`/api/public/product/${id}`).pipe(
      map((products) => products[0])
    );
    //const mock = MOCK_PRODUCTS as unknown as Product[];
    //return of(mock[id]);
  }
}
