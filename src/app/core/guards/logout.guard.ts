import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { IdentityService } from "../services/identity.service";

export const logoutGuard = () => {
    const router = inject(Router);
    const identityService = inject(IdentityService);
    localStorage.removeItem('auth');
    identityService.user.next({});
    return router.createUrlTree(['login']);
};