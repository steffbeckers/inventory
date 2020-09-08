import { createAction, props } from '@ngrx/store';
import { AppAlert } from '../../shared/models/app-alert.model';

export const addAlert = createAction(
  '[Alerts] Add alert',
  props<{ alert: AppAlert }>()
);

export const removeAlert = createAction(
  '[Alerts] Remove alert',
  props<{ alert: AppAlert }>()
);

export const clearAlerts = createAction('[Alerts] Clear alerts');
