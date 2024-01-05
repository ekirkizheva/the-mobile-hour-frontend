import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageUsersAddService } from './manage-users-add.service';

@Component({
  selector: 'app-manage-users-add',
  templateUrl: './manage-users-add.component.html',
  styleUrls: ['./manage-users-add.component.scss']
})
export class ManageUsersAddComponent {

  error = '';

  userForm = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    user_password: ['', Validators.required],
    user_role: ['admin', Validators.required]
  });
  
  constructor(
    private fb: UntypedFormBuilder,
    private ManageUsersAddService: ManageUsersAddService,
    private router: Router
    ) {}

  onSubmit() {
    console.log('sub')
    this.userForm.markAsTouched();
    if (this.userForm.valid) {
      this.ManageUsersAddService.createUser(this.userForm.value)
        .subscribe({
          next: () => this.router.navigate(['admin/manage-users']),
          error: (error) => this.error = error.message
        });
    }
  }
}
