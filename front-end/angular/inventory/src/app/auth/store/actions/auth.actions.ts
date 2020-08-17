import { createAction, props } from '@ngrx/store';
import {
  EmailOrUsernamePasswordCredentialsDto,
  AuthenticatedDto,
} from '../../auth.dtos';

export const loginWithEmailOrUsernamePassword = createAction(
  '[Auth] Login password',
  props<EmailOrUsernamePasswordCredentialsDto>()
);
export const loginWithEmailOrUsernamePasswordSuccess = createAction(
  '[Auth] Login password Success',
  props<AuthenticatedDto>()
);
export const loginWithEmailOrUsernamePasswordFailure = createAction(
  '[Auth] Login password Failure',
  props<any>()
);

export const navigateToLogin = createAction('[Auth] Navigate to login');
