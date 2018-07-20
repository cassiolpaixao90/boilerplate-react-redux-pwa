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
  },
  mongo: {
    uri: "mongodb://boilerplate-react-pwa:boilerplate-react-pwa2018@ds141641.mlab.com:41641/boilerplate-react-pwa"
  },
  secrets: {
    session: 'boilerplate-react-pwa',
    salt: 'f7148498-4044-4c7b-ac11-6adf3cec68ce'
  }
};
