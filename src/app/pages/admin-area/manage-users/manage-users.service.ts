import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS_MOCK } from 'src/app/shared/constants/users.mock';
import { User } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor() { }

  get users$(): Observable<User[]> {
    return of(USERS_MOCK);
  }
}
