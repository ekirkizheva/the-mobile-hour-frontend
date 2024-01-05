import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsModifyService {
  constructor(private http: HttpClient) { }

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(`/api/public/product/${id}`);
  }
}
