import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChangeLog } from 'src/app/shared/models/change-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor() { }

  get changeLog$(): Observable<ChangeLog[]> {
    return of([]);
  }
}
