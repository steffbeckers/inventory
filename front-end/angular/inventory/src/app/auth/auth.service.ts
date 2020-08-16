import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private manager = new UserManager({
    authority: environment.api_base_url,
    client_id: 'angular',
    // TODO: Environment settings
    redirect_uri: 'http://localhost:4200/auth/oidc-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    scope: 'openid profile',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    // TODO: Environment settings
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
  } as UserManagerSettings);

  constructor() {}

  async getCurrentUser(): Promise<User> {
    return await this.manager.getUser();
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  async completeAuthentication(): Promise<User> {
    return await this.manager.signinRedirectCallback();
  }
}
