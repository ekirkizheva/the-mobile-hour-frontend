import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-products-modify',
  templateUrl: './manage-products-modify.component.html',
  styleUrls: ['./manage-products-modify.component.scss']
})
export class ManageProductsModifyComponent {

  error = '';

  productId;

  productForm = this.fb.group({
    product_name: ['', Validators.required],
    product_model: ['', Validators.required],
    manufacturer: ['', Validators.required],
    price: ['', Validators.required],
    stock_on_hand: ['', Validators.required],
    features: [[], Validators.required]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  back() {
    this.router.navigate(['admin/manage-products']);
  }

  onSubmit() {
    
  }
}
