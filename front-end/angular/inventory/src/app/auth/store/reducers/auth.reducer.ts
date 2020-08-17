import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  error: any;
  token: string;
}

export const initialState: State = {
  loading: false,
  error: null,
  token: null,
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
    (state, authenticated) => {
      return {
        ...state,
        loading: false,
        error: null,
        token: authenticated.access_token,
      };
    }
  ),
  on(AuthActions.loginWithEmailOrUsernamePasswordFailure, (state, error) => {
    return {
      ...state,
      loading: false,
      error,
    };
  })
);
