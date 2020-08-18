import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { take, switchMap, first, mergeMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedAuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectIsAuthenticated),
      first(),
      switchMap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('/auth/login');
        }

        return of(isAuthenticated);
      })
    );

    // TESTS

    // return of(true);

    // const observable = this.store.select(selectIsAuthenticated);
    // observable.subscribe((isAuthenticated) => {
    //   console.log(
    //     'IsAuthenticatedAuthGuard => isAuthenticated',
    //     isAuthenticated
    //   );
    //   if (!isAuthenticated) {
    //     // TODO: Hangs browser with navigation loop
    //     // this.router.navigateByUrl('/auth/login');
    //   }
    // });
    // return observable;

    // return this.store.pipe(
    //   select(selectIsAuthenticated),
    //   first(),
    //   mergeMap((isAuthenticated) => {
    //     console.log(
    //       'IsAuthenticatedAuthGuard => isAuthenticated',
    //       isAuthenticated
    //     );
    //     if (!isAuthenticated) {
    //       // TODO: Hangs browser with navigation loop
    //       // this.router.navigateByUrl('/auth/login');
    //       return of(false);
    //     }
    //     return of(true);
    //   })
    // );
    // return this.store.pipe(
    //   select(selectIsAuthenticated),
    //   // take(1),
    //   switchMap((isAuthenticated) => {
    //     console.log(
    //       'IsAuthenticatedAuthGuard => isAuthenticated',
    //       isAuthenticated
    //     );
    //     if (!isAuthenticated) {
    //       // TODO: Hangs browser with navigation loop
    //       // this.router.navigateByUrl('/auth/login');
    //       return of(false);
    //     }
    //     return of(true);
    //   })
    //   // map((isAuthenticated) => {
    //   //   console.log(
    //   //     'IsAuthenticatedAuthGuard => isAuthenticated',
    //   //     isAuthenticated
    //   //   );
    //   //   if (!isAuthenticated) {
    //   //     // TODO
    //   //     // this.router.navigateByUrl('/auth/login');
    //   //     return false;
    //   //   }
    //   //   return true;
    //   // })
    // );
  }
}
