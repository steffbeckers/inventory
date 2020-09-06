import * as AuthActions from '../actions/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectAuthState } from '../selectors/auth.selectors';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
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

  // TODO: Review this code with withLatestFrom store?
  // refreshToken$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.refreshToken),
  //     switchMap(() =>
  //       this.store.pipe(
  //         select(selectAuthState),
  //         exhaustMap(({ refresh_token }) =>
  //           this.authService.refreshToken(refresh_token).pipe(
  //             map((authenticated) =>
  //               AuthActions.refreshTokenSuccess({
  //                 authenticated,
  //               })
  //             ),
  //             catchError((error) =>
  //               of(AuthActions.refreshTokenFailure({ error }))
  //             )
  //           )
  //         )
  //       )
  //     )
  //   )
  // );

  // TODO: This doesn't work as expected
  // loadUserInfoAfterRefreshTokenSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.refreshTokenSuccess),
  //     switchMap((action) => [AuthActions.loadUserInfo()])
  //   )
  // );

  loadUserInfo$ = createEffect(() =>
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
