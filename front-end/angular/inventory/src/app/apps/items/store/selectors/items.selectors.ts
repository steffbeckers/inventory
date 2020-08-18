import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from '../reducers/items.reducer';

export const selectItemsState = createFeatureSelector<fromItems.State>(
  fromItems.itemsFeatureKey
);

// Added these custom selectors

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromItems.adapter.getSelectors(selectItemsState);
