import * as fromAlerts from './reducers/alerts.reducer';
import * as fromItems from '../apps/items/store/reducers/items.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as fromUI from './reducers/ui.reducer';
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
  [fromUI.uiFeatureKey]: fromUI.State;
  [fromAlerts.alertsFeatureKey]: fromAlerts.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromUI.uiFeatureKey]: fromUI.reducer,
  [fromAlerts.alertsFeatureKey]: fromAlerts.reducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [fromUI.uiFeatureKey, fromItems.itemsFeatureKey],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
