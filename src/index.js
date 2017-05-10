import {
  Auth,
  Events,
  Message,
  Team,
  User,
} from './modules';

const teamcowboy = ({
  publicKey,
  privateKey,
}) => {
  if (!publicKey || !privateKey) {
    throw new Error('Please provide a public and private key.');
  }

  return {
    auth: new Auth({ publicKey, privateKey }),
    events: new Events({ publicKey, privateKey }),
    message: new Message({ publicKey, privateKey }),
    team: new Team({ publicKey, privateKey }),
    user: new User({ publicKey, privateKey }),
  };
}

export default teamcowboy;
