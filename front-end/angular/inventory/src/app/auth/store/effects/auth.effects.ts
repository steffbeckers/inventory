import * as AuthActions from '../actions/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  EmailOrUsernamePasswordCredentialsDto,
  AuthenticatedDto,
} from '../../auth.dtos';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loginWithEmailOrUsernamePassword$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithEmailOrUsernamePassword),
      exhaustMap((credentials: EmailOrUsernamePasswordCredentialsDto) =>
        this.authService.loginWithPassword(credentials).pipe(
          map((authenticated: AuthenticatedDto) =>
            AuthActions.loginWithEmailOrUsernamePasswordSuccess(authenticated)
          ),
          catchError((error) =>
            of(AuthActions.loginWithEmailOrUsernamePasswordFailure(error))
          )
        )
      )
    )
  );
}
