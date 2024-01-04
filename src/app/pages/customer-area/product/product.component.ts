import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // Storing observable of product.
  product$: Observable<Product>;

  productForm = this.fb.group({
    color: ['', Validators.required],
    capacity: ['', Validators.required],
    quantity: ['', Validators.required]
  })

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: UntypedFormBuilder
    ) {
    this.product$ = this.productService.getProductById$(this.route.snapshot.params['id']);
  }
}
