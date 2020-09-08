import { Action, createReducer, on } from '@ngrx/store';
import * as AlertActions from '../actions/alerts.actions';
import { AppAlert } from '../../shared/models/app-alert.model';

export const alertsFeatureKey = 'alerts';

export interface State {
  alerts: AppAlert[];
}

export const initialState: State = {
  alerts: [],
};

export const reducer = createReducer(
  initialState,
  on(AlertActions.addAlert, (state, { alert }) => {
    return {
      ...state,
      alerts: [alert, ...state.alerts],
    };
  }),
  on(AlertActions.removeAlert, (state, { alert }) => {
    const alerts = [...state.alerts];

    const alertIndex = alerts.indexOf(alert);
    if (alertIndex >= 0) {
      alerts.splice(alertIndex, 1);
    }

    return {
      ...state,
      alerts,
    };
  }),
  on(AlertActions.clearAlerts, () => {
    return initialState;
  })
);
