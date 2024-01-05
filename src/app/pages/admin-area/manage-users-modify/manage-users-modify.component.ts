import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUsersModifyService } from './manage-users-modify.service';

@Component({
  selector: 'app-manage-users-modify',
  templateUrl: './manage-users-modify.component.html',
  styleUrls: ['./manage-users-modify.component.scss']
})
export class ManageUsersModifyComponent implements OnInit {

  error = '';

  userId;

  userForm = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    user_password: [''],
    user_role: ['admin', Validators.required]
  });
  
  constructor(
    private fb: UntypedFormBuilder,
    private manageUsersModifyService: ManageUsersModifyService,
    private router: Router,
    private route: ActivatedRoute
    ) {
       this.userId = this.route.snapshot.paramMap.get('id');
       if (!this.userId) {
        this.userForm.get('user_password')?.setValidators(Validators.required);
       }
    }

  ngOnInit(): void {
    if (this.userId) {
      this.manageUsersModifyService.getUser(+this.userId).subscribe((result) => {
        this.userForm.patchValue({
          ...result
        })
      })
    }
  }

  onSubmit() {
    this.userForm.markAsTouched();
    if (this.userForm.valid) {
      if (this.userId) {
        this.manageUsersModifyService.modifyUser(+this.userId, this.userForm.value)
        .subscribe({
          next: () => this.router.navigate(['admin/manage-users']),
          error: (error) => this.error = error.message
        });
      } else {
        this.manageUsersModifyService.createUser(this.userForm.value)
        .subscribe({
          next: () => this.router.navigate(['admin/manage-users']),
          error: (error) => this.error = error.message
        });
      }
     
    }
  }
}
