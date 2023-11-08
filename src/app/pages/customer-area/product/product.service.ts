import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Products } from 'src/app/shared/models/product.interface';

const MOCK_PRODUCTS: Products = {
 1: { 
  label: 'Samsung Galaxy s99',
  imageUrl: 'https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/samsung/samsung-galaxy-s23-fe/product-tiles/listing-samsung-galaxy-s23-fe.png/renditions/version-1698869826879/original.png',
  colorsAvailable: [
    { tag: 'Red', code:'#CE4E4E'},
    { tag: 'Silver Gray', code: '#898686'},
    { tag: 'Dark Green', code: '#2D3A29'},
    { tag: 'Murasaki', code: '#401548'},
  ],
  capacity: ['128GB', '256GB', '512GB', '1TB'],
  sku: 'SKU-000001',
  stock: 100,
  price: 799.00
 },
 2: { 
  label: 'Apple iPhone 100500',
  imageUrl: 'https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-15-pro-max/carousel/SD-PDP-01-iphone-15-pro-max-natural-titanium-front-back.jpg/renditions/version-1694745846923/492.jpeg',
  colorsAvailable: [
    { tag: 'Silver Gray', code: '#898686'},
    { tag: 'Dark Green', code: '#2D3A29'},
  ],
  capacity: ['512GB', '1TB'],
  sku: 'SKU-000002',
  stock: 50,
  price: 1099.00
 }
} 

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
