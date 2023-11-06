import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const adminGuard = () => {
    const router = inject(Router);
    return router.createUrlTree(['login']);
}; // TODO: Change to real thing 