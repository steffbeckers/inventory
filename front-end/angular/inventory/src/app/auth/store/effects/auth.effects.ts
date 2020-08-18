import * as AuthActions from '../actions/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  mapTo,
  switchMap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  loginWithEmailOrUsernamePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithEmailOrUsernamePassword),
      exhaustMap(({ credentials }) =>
        this.authService.loginWithPassword(credentials).pipe(
          map((authenticated) =>
            AuthActions.loginWithEmailOrUsernamePasswordSuccess({
              authenticated,
            })
          ),
          catchError((error) =>
            of(AuthActions.loginWithEmailOrUsernamePasswordFailure({ error }))
          )
        )
      )
    )
  );

  loadUserInfo$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.loadUserInfo),
      switchMap(() =>
        this.authService.loadUserInfo().pipe(
          map((userInfo) => AuthActions.loadUserInfoSuccess({ userInfo })),
          catchError((error) => of(AuthActions.loadUserInfoFailure({ error })))
        )
      )
    )
  );

  navigateAfterLoginWithEmailOrUsernamePasswordSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginWithEmailOrUsernamePasswordSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  navigateAfterLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );
}
