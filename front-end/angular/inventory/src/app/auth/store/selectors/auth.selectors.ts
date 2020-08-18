import * as fromAuth from '../reducers/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => {
    return !!state.access_token;
  }
);
