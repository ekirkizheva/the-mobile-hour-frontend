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

  createProduct(product: Product) {
    return this.http.post<Product>('/api/admin/product', product);
  }

  modifyProduct(id:number, product: Product) {
    return this.http.put<Product>(`/api/admin/product/${id}`, product);
  }
}
