"use strict";

module.exports = {
    server:{
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 9000
    },
    envNode: 'production',
    envTunel: false
};
