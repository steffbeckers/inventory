import * as ItemsActions from '../actions/items.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ItemDto, ItemsService } from '../../../../../api/inventory.api';
import { of } from 'rxjs';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      switchMap(() =>
        this.itemsService.getItems().pipe(
          map((items: ItemDto[]) => ItemsActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemsActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.createItem),
      switchMap(({ item }) =>
        this.itemsService.createItem(item).pipe(
          map((itemId: string) => {
            const createdItem: ItemDto = new ItemDto({
              ...item,
              id: itemId,
            });
            return ItemsActions.createItemSuccess({ item: createdItem });
          }),
          catchError((error) => of(ItemsActions.createItemFailure({ error })))
        )
      )
    )
  );
}
