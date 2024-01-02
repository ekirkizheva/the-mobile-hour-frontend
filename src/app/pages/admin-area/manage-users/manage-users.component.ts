import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';
import { ManageUsersService } from './manage-users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {

    // Preserve original property order
    originalOrder = (...args: any): number => 0;

    users$: Observable<any>;

    constructor(private manageUsersService: ManageUsersService) {
      this.users$ = this.manageUsersService.users$;
    }

}
