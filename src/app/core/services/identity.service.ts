import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>({ isLoggedIn: false });

  constructor() {
    this.login('admin', 'admin');
   }


  login(username: string, password: string): Observable<User> {
    if (username === 'admin' && password === 'admin') {
      this.user.next({
        username: 'admin',
        isAdmin: true,
        isLoggedIn: true
      })
      return this.user$;
    } 
    return throwError(() => new Error('Invalid username / password provided'))
  }

  get user$(): Observable<User> {
    return this.user.asObservable();
  }

  get isAdmin$(): Observable<boolean> {
    return this.user$.pipe(
      map((user) => !!user.isLoggedIn && !!user.isAdmin)
    )
  }
}
