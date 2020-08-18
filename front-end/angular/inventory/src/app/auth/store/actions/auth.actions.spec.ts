import * as fromAuth from './auth.actions';

describe('loginWithEmailOrUsernamePassword', () => {
  it('should return an action', () => {
    expect(
      fromAuth.loginWithEmailOrUsernamePassword({
        credentials: {
          emailOrUsername: '',
          password: '',
          rememberMe: false,
        },
      }).type
    ).toBe('[Auth] Login password');
  });
});
