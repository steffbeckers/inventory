import * as fromAlerts from './reducers/alerts.reducer';
import * as fromAuth from '../auth/store/reducers/auth.reducer';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromAlerts.alertsFeatureKey]: fromAlerts.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromAlerts.alertsFeatureKey]: fromAlerts.reducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth', 'items'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
