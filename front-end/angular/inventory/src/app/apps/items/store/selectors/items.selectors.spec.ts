import * as fromItems from '../reducers/items.reducer';
import { selectItemsState } from './items.selectors';

describe('Items Selectors', () => {
  it('should select the feature state', () => {
    const result = selectItemsState({
      [fromItems.itemsFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
