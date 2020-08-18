import * as ItemsActions from '../actions/items.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ItemDto, ItemsService } from 'src/api/inventory.api';
import { of } from 'rxjs';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      switchMap(() =>
        this.itemsService.get().pipe(
          map((items: ItemDto[]) => ItemsActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemsActions.loadItemsFailure({ error })))
        )
      )
    )
  );
}
