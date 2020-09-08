import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlerts from '../reducers/alerts.reducer';

export const selectAlertsState = createFeatureSelector<fromAlerts.State>(
  fromAlerts.alertsFeatureKey
);
