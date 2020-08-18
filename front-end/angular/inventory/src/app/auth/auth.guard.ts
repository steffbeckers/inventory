import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedAuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectIsAuthenticated),
      map((isAuthenticated: boolean) => {
        console.log(
          'IsAuthenticatedAuthGuard => isAuthenticated',
          isAuthenticated
        );

        if (isAuthenticated) {
          return true;
        }

        // TODO
        // this.router.navigateByUrl('/auth/login');

        return false;
      })
    );
  }
}
