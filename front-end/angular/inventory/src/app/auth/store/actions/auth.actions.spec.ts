import * as fromAuth from './auth.actions';

describe('loginWithEmailOrUsernamePassword', () => {
  it('should return an action', () => {
    expect(
      fromAuth.loginWithEmailOrUsernamePassword({
        emailOrUsername: '',
        password: '',
        rememberMe: false,
      }).type
    ).toBe('[Auth] Login password');
  });
});
