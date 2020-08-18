import * as fromAuth from '../reducers/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => {
    // TODO: Check token valid?
    return !!state.access_token;
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
