import { createAction, props } from '@ngrx/store';
import {
  EmailOrUsernamePasswordCredentialsDto,
  AuthenticatedDto,
  UserInfoResponse,
} from '../../auth.dtos';

export const loginWithEmailOrUsernamePassword = createAction(
  '[Auth] Login password',
  props<{ credentials: EmailOrUsernamePasswordCredentialsDto }>()
);
export const loginWithEmailOrUsernamePasswordSuccess = createAction(
  '[Auth] Login password Success',
  props<{ authenticated: AuthenticatedDto }>()
);
export const loginWithEmailOrUsernamePasswordFailure = createAction(
  '[Auth] Login password Failure',
  props<{ error: any }>()
);

export const loadUserInfo = createAction('[Auth] Load user info');
export const loadUserInfoSuccess = createAction(
  '[Auth] Load user info Success',
  props<{ userInfo: UserInfoResponse }>()
);
export const loadUserInfoFailure = createAction(
  '[Auth] Load user info Failure',
  props<{ error: any }>()
);

export const refreshToken = createAction(
  '[Auth] Refresh token'
  // props<{ token: string }>()
);
export const refreshTokenSuccess = createAction(
  '[Auth] Refresh token Success',
  props<{ authenticated: AuthenticatedDto }>()
);
export const refreshTokenFailure = createAction(
  '[Auth] Refresh token Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
