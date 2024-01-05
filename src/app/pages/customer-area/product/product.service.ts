import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    return this.http.get<Product>(`/api/public/product/${id}`);
  }
}
