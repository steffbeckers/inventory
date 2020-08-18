import { createAction, props } from '@ngrx/store';
import { ItemDto } from 'src/api/inventory.api';

export const loadItems = createAction('[Items] Load items');

export const loadItemsSuccess = createAction(
  '[Items] Load items Success',
  props<{ items: ItemDto[] }>()
);

export const loadItemsFailure = createAction(
  '[Items] Load items Failure',
  props<{ error: any }>()
);
