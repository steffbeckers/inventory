import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import {
  AuthenticatedDto,
  EmailOrUsernamePasswordCredentialsDto,
  UserInfoResponse,
} from './auth.dtos';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // OIDC test
  // private manager = new UserManager({
  //   authority: environment.api_base_url,
  //   client_id: 'angular',
  //   redirect_uri: `${window.origin}/auth/oidc-callback`,
  //   post_logout_redirect_uri: window.origin,
  //   response_type: 'token',
  //   scope: 'openid profile',
  //   filterProtocolClaims: true,
  //   loadUserInfo: true,
  //   // TODO: Test
  //   // automaticSilentRenew: true,
  //   // silent_redirect_uri: `${window.origin}/silent-refresh.html`,
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
    formData.append('scope', 'openid profile offline_access Inventory.APIAPI');

    return this.http.post<AuthenticatedDto>(
      `${environment.api_base_url}/connect/token`,
      formData
    );
  }

  refreshToken(token: string): Observable<AuthenticatedDto> {
    const formData = new FormData();
    formData.append('client_id', 'angular');
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', token);
    formData.append('scope', 'openid profile offline_access Inventory.APIAPI');

    return this.http.post<AuthenticatedDto>(
      `${environment.api_base_url}/connect/token`,
      formData
    );
  }

  loadUserInfo(): Observable<UserInfoResponse> {
    return this.http.get<UserInfoResponse>(
      `${environment.api_base_url}/connect/userinfo`
    );
  }

  // OIDC test
  // startAuthentication(): Promise<void> {
  //   return this.manager.signinRedirect();
  // }

  // async completeAuthentication(): Promise<User> {
  //   return await this.manager.signinRedirectCallback();
  // }
}
