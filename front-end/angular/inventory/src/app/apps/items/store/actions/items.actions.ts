import { createAction, props } from '@ngrx/store';
import { CreateItemDto, ItemDto } from '../../../../../api/inventory.api';

export const loadItems = createAction('[Items] Load items');

export const loadItemsSuccess = createAction(
  '[Items] Load items Success',
  props<{ items: ItemDto[] }>()
);

export const loadItemsFailure = createAction(
  '[Items] Load items Failure',
  props<{ error: any }>()
);

export const createItem = createAction(
  '[Items] Create item',
  props<{ item: CreateItemDto }>()
);

export const createItemSuccess = createAction(
  '[Items] Create item Success',
  props<{ item: ItemDto }>()
);

export const createItemFailure = createAction(
  '[Items] Create item Failure',
  props<{ error: any }>()
);
