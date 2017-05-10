import BaseModule from './Base.js';

class TeamModule extends BaseModule {
  constructor({ publicKey, privateKey }) {
    super({ publicKey, privateKey});
  }

  get = (data) => this.request({
    tcMethod: 'Team_Get',
    httpMethod: 'GET',
    data,
  });

  getEvents = (data) => this.request({
    tcMethod: 'Team_GetEvents',
    httpMethod: 'GET',
    data,
  });

  getMessages = (data) => this.request({
    tcMethod: 'Team_GetMessages',
    httpMethod: 'POST',
    data,
  });

  getRoster = (data) => this.request({
    tcMethod: 'Team_GetRoster',
    httpMethod: 'POST',
    data,
  });

  getSeasons = (data) => this.request({
    tcMethod: 'Team_GetSeasons',
    httpMethod: 'POST',
    data,
  });
}

export default TeamModule;
