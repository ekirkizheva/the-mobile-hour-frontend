import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentityService } from 'src/app/core/services/identity.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(private identityService: IdentityService) {
    this.user$ = identityService.user$;
  }

}
