import { Component } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
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

    reloadSubject: Subject<void> = new Subject();

    deleteConfirmationPending: {[key:number]: boolean} = {};

    constructor(private manageUsersService: ManageUsersService) {
      this.users$ = this.reloadSubject.asObservable().pipe(
        startWith(0),
        switchMap(() => this.manageUsersService.users$)
      );
    }

    confirmDelete(id:number) {
      this.deleteConfirmationPending[id] = true;
    }

    cancelDelete(id:number) {
      this.deleteConfirmationPending[id] = false;
    }

    deleteUser(id:number) {
      this.manageUsersService.deleteUser(id)
      .pipe(
        tap(() => this.deleteConfirmationPending[id] = false),
        tap(() => this.reloadSubject.next())
      )
      .subscribe();
    }

}
