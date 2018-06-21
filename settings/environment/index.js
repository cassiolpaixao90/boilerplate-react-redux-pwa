'use strict';

import _ from 'lodash';

process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
const setting = require('./' + process.env.NODE_ENV + '.js' || {});

const all = {

    env: setting.env,
    server: {
        ip: setting.server.ip,
        port: setting.server.port
    }
};

module.exports = _.assign(all, require('./' + process.env.NODE_ENV + '.js' || {}));



