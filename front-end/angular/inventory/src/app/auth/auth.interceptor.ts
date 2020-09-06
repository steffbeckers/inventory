import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { selectAuthorizationHeaderValue } from './store/selectors/auth.selectors';
import { first, mergeMap, catchError } from 'rxjs/operators';
import * as AuthActions from './store/actions/auth.actions';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(selectAuthorizationHeaderValue),
      first(),
      mergeMap((authorizationHeaderValue) => {
        const authReq = !!authorizationHeaderValue
          ? req.clone({
              headers: req.headers.set(
                'Authorization',
                authorizationHeaderValue
              ),
            })
          : req;

        return next.handle(authReq);
      })
    );
  }
}

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        const errorResponse = err as HttpErrorResponse;

        if (errorResponse.status === 401) {
          this.store.dispatch(AuthActions.refreshToken());
          // TODO: Listen for successful refresh of access token and proceed request with the new token
        }

        return throwError(err);
      })
    );
  }
}
