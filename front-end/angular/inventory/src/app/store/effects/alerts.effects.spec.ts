import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlertsEffects } from './alerts.effects';

describe('AlertsEffects', () => {
  const actions$: Observable<any> = new Observable<any>();
  let effects: AlertsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AlertsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
