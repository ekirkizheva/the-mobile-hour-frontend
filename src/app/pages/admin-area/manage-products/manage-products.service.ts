import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor(private http: HttpClient) { }

  get products$(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/public/product');
  }
}
