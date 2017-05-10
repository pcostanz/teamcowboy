import BaseModule from './Base.js';

class AuthModule extends BaseModule {
  constructor(keys) {
    super(keys);
  }

  getUserToken = (data) => this.request({
    tcMethod: 'Auth_GetUserToken',
    httpMethod: 'POST',
    ssl: true,
    data,
  });
}

export default AuthModule;
