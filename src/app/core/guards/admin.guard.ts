import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IdentityService } from '../services/identity.service';

export const adminGuard: CanActivateFn = (route, state): Observable<UrlTree | boolean> => {
  const identity = inject(IdentityService);
  const router = inject(Router);
  return identity.isAdmin$.pipe(
    map((isAdmin) => isAdmin || router.createUrlTree(['login']))
  );
};
