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

export interface UserInfoResponse {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  preferred_username: string;
  email: string;
  picture: string;
}
