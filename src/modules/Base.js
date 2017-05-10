import axios from 'axios';
import sha1 from 'js-sha1';
import qs from 'qs';

class BaseModule {
  constructor({ privateKey, publicKey }) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  request = ({
    tcMethod,
    httpMethod,
    ssl,
    data,
  }) => {
    const timestamp = new Date().getTime() / 1000 | 0;
    const nonce = `${timestamp}.${Math.floor(Math.random() * 1000)}`;

    const requestData = {
      ...data,
      api_key: this.publicKey,
      method: tcMethod,
      nonce,
      timestamp,
    };

    const sortedRequestKeys = Object.keys(requestData).sort();

    const sortedRequestData = sortedRequestKeys.reduce((prev, next) => {
      return {
        ...prev,
        [next]: requestData[next],
      };
    }, {});

    const stringifiedRequestData = qs.stringify(sortedRequestData);
    const requestDataLowerCase = stringifiedRequestData.toLowerCase();
    const sig = sha1(`${this.privateKey}|${httpMethod.toUpperCase()}|${tcMethod}|${timestamp}|${nonce}|${requestDataLowerCase}`);
    const dataWithSig = `${stringifiedRequestData}&sig=${sig}`;

    return axios({
      method: httpMethod,
      url: ssl ? 'https://api.teamcowboy.com/v1/' : `http://api.teamcowboy.com/v1/?${dataWithSig}`,
      data: dataWithSig,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': 99999999,
      }
    })
    .then(res => res.data)
    .catch(err => err.response.data);
  }
}

export default BaseModule;
