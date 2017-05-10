import BaseModule from './Base.js';

class EventsModule extends BaseModule {
  constructor({ publicKey, privateKey }) {
    super({ publicKey, privateKey});
  }

  get = (data) => this.request({
    tcMethod: 'Event_Get',
    httpMethod: 'GET',
    data,
  });

  getAttendanceList = (data) => this.request({
    tcMethod: 'Event_GetAttendanceList',
    httpMethod: 'GET',
    data,
  });

  saveRSVP = (data) => this.request({
    tcMethod: 'Event_SaveRSVP',
    httpMethod: 'POST',
    data,
  });
}

export default EventsModule;
