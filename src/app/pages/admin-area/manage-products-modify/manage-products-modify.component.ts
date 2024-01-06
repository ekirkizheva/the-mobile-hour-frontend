import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageProductsModifyService } from './manage-products-modify.service';

@Component({
  selector: 'app-manage-products-modify',
  templateUrl: './manage-products-modify.component.html',
  styleUrls: ['./manage-products-modify.component.scss']
})
export class ManageProductsModifyComponent implements OnInit {

  error = '';

  productId;

  deleteConfirmationPending: {[key:number]: boolean} = {};

  isNewFeatureVisible = false;
  
  productForm = this.fb.group({
    id: [''],
    product_name: ['', Validators.required],
    product_model: ['', Validators.required],
    manufacturer: ['', Validators.required],
    price: ['', Validators.required],
    stock_on_hand: ['', Validators.required],
    features: [[]]
  });

  newFeatureForm = this.fb.group({
    id: [''],
    weight: ['', Validators.required],
    dimensions: ['', Validators.required],
    os: ['', Validators.required],
    screensize: ['', Validators.required],
    resolution: ['', Validators.required],
    cpu: ['', Validators.required],
    ram: ['', Validators.required],
    storage: ['', Validators.required],
    battery: ['', Validators.required],
    rear_camera: ['', Validators.required],
    front_camera: ['', Validators.required],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private manageProductsModifyService: ManageProductsModifyService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.productId) {
      this.manageProductsModifyService.getProduct(+this.productId).subscribe((result) => {
        this.productForm.patchValue({
          ...result
        })
      })
    }
  }

  back() {
    this.router.navigate(['admin/manage-products']);
  }

  confirmDelete(id:number) {
    this.deleteConfirmationPending[id] = true;
  }

  cancelDelete(id:number) {
    this.deleteConfirmationPending[id] = false;
  }

  deleteFeature(id:number) {
    const features = [...this.productForm.get('features')?.value];
    features.splice(id,1);
    this.productForm.patchValue({ features });
  }

  onSubmit() {
    if (this.productForm.valid){
      if (this.productId) {
        this.manageProductsModifyService.modifyProduct(+this.productId, this.productForm.value).subscribe({
          next: () => this.router.navigate(['admin/manage-products']),
          error: (error) => this.error = error.message
        });
      } else {
        // Making sure that new product does not come with ID as this will be auto generated in the DB
        const product = this.productForm.value;
        delete product.id;

        this.manageProductsModifyService.createProduct(product)
        .subscribe({
          next: () => this.router.navigate(['admin/manage-products']),
          error: (error) => this.error = error.message
        });
      } 
    }
  }

  addFeature() {
    // Making sure that new features do not come with IDs as those will be auto generated in the DB
    const newFeature = this.newFeatureForm.value;
    delete newFeature.id;

    this.isNewFeatureVisible = false;
    this.productForm.get('features')?.value.push(newFeature);
    this.newFeatureForm.reset();
  }
}
