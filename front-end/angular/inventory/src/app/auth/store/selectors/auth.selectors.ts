import * as fromAuth from '../reducers/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

function tokenExpired(token: string): boolean {
  const expiry = JSON.parse(atob(token.split('.')[1])).exp;
  return Math.floor(new Date().getTime() / 1000) >= expiry;
}

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => {
    return !!state.access_token && !tokenExpired(state.access_token);
  }
);

export const selectUser = createSelector(selectAuthState, (state) => {
  return state.user;
});

export const selectAuthorizationHeaderValue = createSelector(
  selectAuthState,
  (state) => {
    return `${state.token_type} ${state.access_token}`;
  }
);
