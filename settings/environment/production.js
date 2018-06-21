"use strict";

module.exports = {
    server:{
        ip: process.env.IP || '',
        port: process.env.PORT || '9000'
    },
    env: 'production',
    envTunel: false
};
