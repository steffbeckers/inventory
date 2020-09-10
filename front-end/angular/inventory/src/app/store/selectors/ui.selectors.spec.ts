import * as fromUI from '../reducers/ui.reducer';
import { selectUIState } from './ui.selectors';

describe('UI Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUIState({
      [fromUI.uiFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
