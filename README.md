# React + Redux + PWA

![boilerplate-react-redux-pwa]()

It's sample boilerplate react, redux and pwa 

## Getting Started

This instructions will take you to a copy of the running project in your actual local machine for development means.
Please consult the steps to deploy your project

### Pré-requisites

- NodeJS 8.1.x
- VSCode
- NPM or YARN
- WebPack CLI
- MLab
- Postman
- NgRok
 
 
### Technologies

| Tech | Description |
| --- | --- |
| NodeJS | [https://nodejs.org/en/download/](https://nodejs.org/en/download/) |
| Nodemon | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon) |
| NPM | [https://docs.npmjs.com/](https://docs.npmjs.com/)  |
| WebPack 4 | [https://webpack.js.org/](https://webpack.js.org/)  |
| Babel | [https://github.com/epoberezkin/ajv](https://github.com/epoberezkin/ajv) |
| NgRok  | [https://ngrok.com/](https://ngrok.com/) |
| ReactJS | [https://github.com/babel/babel-loaderhttps://reactjs.org/](https://reactjs.org/) |
| Redux | [https://redux.js.org/](https://redux.js.org/) |
| PWA | [https://developers.google.com/web/progressive-web-apps/](https://developers.google.com/web/progressive-web-apps/) |
| Onsenui | [https://onsen.io/](https://onsen.io/) |
| JWT | [https://jwt.io/](https://jwt.io/) |
| ES6 | [http://es6-features.org/#Constants](http://es6-features.org/#Constants) |


## Installing

### Steps to setup

**1. Clone the application**

```bash
git clone https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa.git
```

**2. Install dependence the app using NPM or YARN**

```bash
cd boilerplate-react-redux-pwa
npm install
```


**3. Run generate certificate HTTPS in mode DEV ( Optional )**

```bash
npm run certs
```

**4. Run mode Development**

```bash
npm run dev
```

**5. Run mode Production**

```bash
npm run prod
```

## API in Postman Collection

**Try out the Boilerplate-React-PWA REST API using Postman with this ready-made Postman collection.**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/6983e6f507e09e3b7763)


## Troubleshooting

**Nodemon internal watch failed: watch ENOSPC**

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details




