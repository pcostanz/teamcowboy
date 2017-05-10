import BaseModule from './Base.js';

class MessageModule extends BaseModule {
  constructor({ publicKey, privateKey }) {
    super({ publicKey, privateKey});
  }

  get = (data) => this.request({
    tcMethod: 'Message_Get',
    httpMethod: 'GET',
    data,
  });

  del = (data) => this.request({
    tcMethod: 'Message_Delete',
    httpMethod: 'POST',
    data,
  });

  save = (data) => this.request({
    tcMethod: 'Message_Save',
    httpMethod: 'POST',
    data,
  });

  deleteComment = (data) => this.request({
    tcMethod: 'MessageComment_Delete',
    httpMethod: 'POST',
    data,
  });

  addComment = (data) => this.request({
    tcMethod: 'MessageComment_Add',
    httpMethod: 'POST',
    data,
  });
}

export default MessageModule;
