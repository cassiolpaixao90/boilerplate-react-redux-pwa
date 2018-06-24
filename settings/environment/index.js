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
    }
};

module.exports = _.assign(all, setting);



