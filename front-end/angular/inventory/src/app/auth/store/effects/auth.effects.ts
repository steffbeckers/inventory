import * as AuthActions from '../actions/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
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

  loginWithEmailOrUsernamePassword$ = createEffect((): any =>
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

  navigateAfterLoginWithEmailOrUsernamePasswordSuccess$ = createEffect(
    (): any =>
      this.actions$.pipe(
        ofType(AuthActions.loginWithEmailOrUsernamePasswordSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  navigateToLogin$ = createEffect(
    (): any =>
      this.actions$.pipe(
        ofType(AuthActions.navigateToLogin),
        tap(() => {
          this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );
}
