import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { first, mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: OidcSecurityService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // We only need to add our access token on requests for our API
    if (req.url.startsWith(`${environment.api_base_url}/api`)) {
      // Retrieve the access token from the authentication service
      const accessToken = this.authService.getToken();
      if (accessToken) {
        // Add the access token to the request headers
        const headers = req.headers.set(
          'Authorization',
          `Bearer ${accessToken}`
        );
        const authenticatedReq = req.clone({ headers });

        return next.handle(authenticatedReq);
      }
    }

    return next.handle(req);
  }
}
