import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeLog } from 'src/app/shared/models/change-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor(private http: HttpClient) { }

  get changeLog$(): Observable<ChangeLog[]> {
    return this.http.get<ChangeLog[]>('/api/admin/changelog');
  }
}
