'use strict';

import _       from 'lodash'
const env = process.env.NODE_ENV || 'development'
const setting = require(`./${env}.js`);

const all = {
    envNode: setting.envNode,
    envTunel: setting.envTunel,
    server: {
        host: setting.server.host,
        port: setting.server.port
    },
    ngrok: {
      proto: setting.proto,
      addr: setting.addr,
      authtoken: setting.authtoken
    },
    secrets: {
      session: setting.secrets.session,
      salt: setting.secrets.salt
  },
  mongo: {
      uri: setting.mongo.uri
  }
};

module.exports = _.assign(all, setting);



