import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';
import { map, mapTo, switchMap } from 'rxjs/operators';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private authService: OidcSecurityService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      map((isAuthenticated: boolean) => {
        console.log(
          'IsAuthenticatedGuard => isAuthenticated: ' + isAuthenticated
        );

        if (!isAuthenticated) {
          this.router.navigateByUrl('/auth/login');
          return false;
        }

        return true;
      })
    );
  }
}
