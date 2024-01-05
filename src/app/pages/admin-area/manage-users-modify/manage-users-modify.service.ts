import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersModifyService {
  
  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/api/admin/user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/admin/user', user);
  }

  modifyUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`/api/admin/user/${id}`, user);
  }
}
