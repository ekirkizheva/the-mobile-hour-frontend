import { Component } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { ManageProductsService } from './manage-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent {

  // Preserve original property order
  originalOrder = (...args: any): number => 0;

  deleteConfirmationPending: {[key:number]: boolean} = {};

  products$: Observable<Product[]>;

  reloadSubject: Subject<void> = new Subject();

  constructor(private manageProductService: ManageProductsService) {
    this.products$ = this.reloadSubject.asObservable().pipe(
      startWith(0),
      switchMap(() => this.manageProductService.products$)
    );
  }

  confirmDelete(id:number) {
    this.deleteConfirmationPending[id] = true;
  }

  cancelDelete(id:number) {
    this.deleteConfirmationPending[id] = false;
  }

  deleteProduct(id:number) {
    this.manageProductService.deleteProduct(id)
    .pipe(
      tap(() => this.deleteConfirmationPending[id] = false),
      tap(() => this.reloadSubject.next())
    )
    .subscribe();
  }

}
