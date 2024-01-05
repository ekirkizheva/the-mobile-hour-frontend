import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private manageProductService: ManageProductsService) {
    this.products$ = this.manageProductService.products$;
  }

  confirmDelete(id:number) {
    this.deleteConfirmationPending[id] = true;
  }

  cancelDelete(id:number) {
    this.deleteConfirmationPending[id] = false;
  }

  deleteProduct(id:number) {
    // this.manageUsersService.deleteUser(id)
    // .pipe(
    //   tap(() => this.deleteConfirmationPending[id] = false),
    //   tap(() => this.reloadSubject.next())
    // )
    // .subscribe();
  }

}
