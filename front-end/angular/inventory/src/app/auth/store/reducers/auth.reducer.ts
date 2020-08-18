import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  error: any;
  access_token: string;
  token_type: string;
}

export const initialState: State = {
  loading: false,
  error: null,
  access_token: null,
  token_type: null,
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
  on(AuthActions.logout, (state) => {
    return initialState;
  })
);
