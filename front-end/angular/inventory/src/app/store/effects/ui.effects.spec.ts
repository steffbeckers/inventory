import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UIEffects } from './ui.effects';

describe('UIEffects', () => {
  let actions$: Observable<any>;
  let effects: UIEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UIEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UIEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
