import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { selectAuthState } from './store/selectors/auth.selectors';
import { map } from 'rxjs/operators';
import * as AuthActions from './store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedAuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAuthState),
      map((authState) => {
        console.log('authState', authState);

        // TODO: This hangs the browser :(, keeps navigating?

        // if (authState && authState.access_token) {
        return true;
        // }

        // this.store.dispatch(AuthActions.navigateToLogin());
        // return false;
      })
    );
  }
}
