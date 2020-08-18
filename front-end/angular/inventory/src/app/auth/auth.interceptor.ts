import { AuthModule } from './auth.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { selectAuthorizationHeaderValue } from './store/selectors/auth.selectors';
import { first, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: AuthModule,
})
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
