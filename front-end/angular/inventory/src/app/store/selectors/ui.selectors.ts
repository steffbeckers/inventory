import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUI from '../reducers/ui.reducer';

export const selectUIState = createFeatureSelector<fromUI.State>(
  fromUI.uiFeatureKey
);
