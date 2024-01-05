import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable, switchMap, take, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>({ });

  constructor(private http: HttpClient) {
    // TODO: Remove for protecting admin login
    // this.login('admin', 'admin');
   }

  restoreUserFromSavedToken() {
    const access_token = localStorage.getItem('auth');

    if (access_token) {
      const user = new JwtHelperService().decodeToken(access_token);

      if (user.exp > (new Date()).getTime()) {
        localStorage.removeItem('auth');
      }

      this.user.next(user);
    }
  }

  logout() {
    localStorage.removeItem('auth');
    this.user.next({});
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{access_token: string}>('/api/singin', {username, password}).pipe(
      tap(({access_token}) => localStorage.setItem('auth', access_token)), 
      tap(({access_token}) => this.user.next(new JwtHelperService().decodeToken(access_token) || {})),
      switchMap(() => this.user$),
      take(1));
  }

  get user$(): Observable<User> {
    return this.user.asObservable();
  }

  get isAdmin$(): Observable<boolean> {
    return this.user$.pipe(
      map((user) => user.user_role === 'admin')
    )
  }
}
