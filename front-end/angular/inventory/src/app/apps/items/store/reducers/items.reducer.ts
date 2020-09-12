import * as ItemsActions from '../actions/items.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ItemDto } from 'src/api/inventory.api';

export const itemsFeatureKey = 'items';

export interface State extends EntityState<ItemDto> {
  // additional state property
  loading: boolean;
  error: any;
  createItemErrors: any;
}

export const adapter: EntityAdapter<ItemDto> = createEntityAdapter<ItemDto>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null,
  createItemErrors: null,
});

export const reducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(ItemsActions.loadItemsSuccess, (state, { items }) => {
    return adapter.setAll(items, {
      ...state,
      loading: false,
    });
  }),
  on(ItemsActions.loadItemsFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(ItemsActions.createItem, (state) => {
    return {
      ...state,
      loading: true,
      createItemErrors: null,
    };
  }),
  on(ItemsActions.createItemSuccess, (state, { item }) => {
    return adapter.addOne(item, {
      ...state,
      loading: false,
    });
  }),
  on(ItemsActions.createItemFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      createItemErrors: JSON.parse(error.response).errors,
    };
  })
);
