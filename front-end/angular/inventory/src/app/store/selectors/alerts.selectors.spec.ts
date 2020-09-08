import * as fromAlerts from '../reducers/alerts.reducer';
import { selectAlertsState } from './alerts.selectors';

describe('Alerts Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlertsState({
      [fromAlerts.alertsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
