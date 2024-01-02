import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHANGE_LOG_MOCK } from 'src/app/shared/constants/change-log.mock';
import { ChangeLog } from 'src/app/shared/models/change-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor() { }

  get changeLog$(): Observable<ChangeLog[]> {
    return of(CHANGE_LOG_MOCK);
  }
}
