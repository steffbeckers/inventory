import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { take, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedAuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectIsAuthenticated),
      // take(1),
      switchMap((isAuthenticated) => {
        console.log(
          'IsAuthenticatedAuthGuard => isAuthenticated',
          isAuthenticated
        );

        if (!isAuthenticated) {
          // TODO: Hangs browser with navigation loop
          // this.router.navigateByUrl('/auth/login');
          return of(false);
        }

        return of(true);
      })
      // map((isAuthenticated) => {
      //   console.log(
      //     'IsAuthenticatedAuthGuard => isAuthenticated',
      //     isAuthenticated
      //   );

      //   if (!isAuthenticated) {
      //     // TODO
      //     // this.router.navigateByUrl('/auth/login');
      //     return false;
      //   }

      //   return true;
      // })
    );
  }
}
