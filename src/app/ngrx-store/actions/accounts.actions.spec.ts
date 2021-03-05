import * as fromAccounts from './accounts.actions';

describe('loadAccountss', () => {
  it('should return an action', () => {
    expect(fromAccounts.loadAccountss().type).toBe('[Accounts] Load Accountss');
  });
});
