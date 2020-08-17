export interface EmailOrUsernamePasswordCredentialsDto {
  emailOrUsername: string;
  password: string;
  rememberMe: boolean;
}

export interface ClientIdClientSecretCredentialsDto {
  clientId: string;
  clientSecret: string;
}

export interface AuthenticatedDto {
  access_token: string;
  expires_in: string;
  token_type: string;
  scope: string;
}
