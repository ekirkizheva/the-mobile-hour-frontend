import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  selectedBrand = 'all';
  selectedSorting = 'none';

  filterByBrand: BehaviorSubject<string> = new BehaviorSubject(this.selectedBrand);
  sortBy: BehaviorSubject<string> = new BehaviorSubject(this.selectedSorting);

  brands$: Observable<string[]>;
  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService
  ) {
    this.brands$ = this.productsService.brands$;
    this.products$ = combineLatest({
      products: this.productsService.products$,
      filter: this.filterByBrand.asObservable(),
      sort: this.sortBy.asObservable()
    }).pipe(
      map(({  products, filter, sort }) => {  
        let _products:Product[] = products;

        if (filter !== 'all') {
          _products = _products.filter((product) => product.manufacturer === filter)
        }

        if (sort !== 'none') {
          return _products.sort((a, b) => {
            if (sort === 'lowest') {
              return a.price > b.price ? 1 : -1;
            }
            return a.price > b.price ? -1 : 1;
          }) 
        }

        return _products;
      })
    )
  }

  applyBrandFilter(): void {
    this.filterByBrand.next(this.selectedBrand);
  }

  applyPriceSort(): void {
    this.sortBy.next(this.selectedSorting);
  }
}
