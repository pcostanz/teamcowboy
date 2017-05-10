import BaseModule from './Base.js';

class UserModule extends BaseModule {
  constructor({ publicKey, privateKey }) {
    super({ publicKey, privateKey});
  }

  get = (data) => this.request({
    tcMethod: 'User_Get',
    httpMethod: 'GET',
    data,
  });

  getNextTeamEvent = (data) => this.request({
    tcMethod: 'User_GetNextTeamEvent',
    httpMethod: 'GET',
    data,
  });

  getTeamEvents = (data) => this.request({
    tcMethod: 'User_GetTeamEvents',
    httpMethod: 'GET',
    data,
  });

  getTeamMessages = (data) => this.request({
    tcMethod: 'User_GetTeamMessages',
    httpMethod: 'GET',
    data,
  });

  getTeams = (data) => this.request({
    tcMethod: 'User_GetTeams',
    httpMethod: 'GET',
    data,
  });
}

export default UserModule;
