import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from '../../auth.models';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  error: any;
  access_token: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user: User;
}

export const initialState: State = {
  loading: false,
  error: null,
  access_token: null,
  token_type: null,
  refresh_token: null,
  id_token: null,
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginWithEmailOrUsernamePassword, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(
    AuthActions.loginWithEmailOrUsernamePasswordSuccess,
    (state, { authenticated }) => {
      return {
        ...state,
        loading: false,
        error: null,
        access_token: authenticated.access_token,
        token_type: authenticated.token_type,
        refresh_token: authenticated.refresh_token,
      };
    }
  ),
  on(
    AuthActions.loginWithEmailOrUsernamePasswordFailure,
    (state, { error }) => {
      return {
        ...state,
        loading: false,
        error,
      };
    }
  ),
  on(AuthActions.loadUserInfo, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(AuthActions.loadUserInfoSuccess, (state, { userInfo }) => {
    return {
      ...state,
      loading: false,
      error: null,
      user: {
        id: userInfo.sub,
        username: userInfo.preferred_username,
        email: userInfo.email,
      },
    };
  }),
  on(AuthActions.loadUserInfoFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(AuthActions.refreshToken, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(AuthActions.refreshTokenSuccess, (state, { authenticated }) => {
    return {
      ...state,
      loading: false,
      error: null,
      access_token: authenticated.access_token,
      token_type: authenticated.token_type,
      refresh_token: authenticated.refresh_token,
      id_token: authenticated.id_token,
    };
  }),
  on(AuthActions.refreshTokenFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(AuthActions.logout, (state) => {
    return initialState;
  })
);
