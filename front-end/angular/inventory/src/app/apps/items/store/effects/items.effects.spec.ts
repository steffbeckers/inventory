import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ItemsEffects } from './items.effects';

describe('ItemsEffects', () => {
  let actions$: Observable<any>;
  let effects: ItemsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ItemsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
