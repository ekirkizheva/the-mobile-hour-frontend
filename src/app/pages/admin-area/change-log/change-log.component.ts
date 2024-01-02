import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeLog } from 'src/app/shared/models/change-log.interface';
import { ChangeLogService } from './change-log.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent {

  changeLog$: Observable<ChangeLog[]>;

  // Preserve original property order
  originalOrder = (...args: any): number => {
    return 0;
  }

  constructor(private changeLogService: ChangeLogService) {
    this.changeLog$ = this.changeLogService.changeLog$;
  }
}
