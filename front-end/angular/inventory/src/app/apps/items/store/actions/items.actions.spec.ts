import * as fromItems from './items.actions';

describe('loadItems', () => {
  it('should return an action', () => {
    expect(fromItems.loadItems().type).toBe('[Items] Load items');
  });
});
