"use strict";

module.exports = {
  server: {
    host: 'localhost',
    port: 9000
  },
  envNode: 'development',
  envTunel: true,
  ngrok: {
    proto: 'http',
    addr: `${9000}`,
    authtoken: '74jcgkSyZ7n6BmeLWpTqS_51d12j5EKBa6gjhboEqTY'
  }
};

