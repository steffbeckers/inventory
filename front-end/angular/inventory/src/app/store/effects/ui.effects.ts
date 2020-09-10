import * as UIActions from '../actions/ui.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class UIEffects {
  constructor(private actions$: Actions) {}
}
