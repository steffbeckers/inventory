import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  AuthenticatedDto,
  EmailOrUsernamePasswordCredentialsDto,
} from './auth.dtos';

// OIDC test
// import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // OIDC test
  // private manager = new UserManager({
  //   authority: environment.api_base_url,
  //   client_id: 'angular',
  //   // TODO: Environment settings
  //   redirect_uri: 'http://localhost:4200/auth/oidc-callback',
  //   post_logout_redirect_uri: 'http://localhost:4200/',
  //   response_type: 'token',
  //   scope: 'openid profile',
  //   filterProtocolClaims: true,
  //   loadUserInfo: true,
  //   automaticSilentRenew: true,
  //   // TODO: Environment settings
  //   silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
  // } as UserManagerSettings);

  constructor(private http: HttpClient) {}

  loginWithPassword(
    credentials: EmailOrUsernamePasswordCredentialsDto
  ): Observable<AuthenticatedDto> {
    const formData = new FormData();
    formData.append('client_id', 'angular');
    formData.append('grant_type', 'password');
    formData.append('username', credentials.emailOrUsername);
    formData.append('password', credentials.password);
    formData.append('scope', 'openid profile Inventory.APIAPI');

    return this.http.post<AuthenticatedDto>(
      `${environment.api_base_url}/connect/token`,
      formData
    );
  }

  // OIDC test
  // async getCurrentUser(): Promise<User> {
  //   return await this.manager.getUser();
  // }

  // startAuthentication(): Promise<void> {
  //   return this.manager.signinRedirect();
  // }

  // async completeAuthentication(): Promise<User> {
  //   return await this.manager.signinRedirectCallback();
  // }
}
