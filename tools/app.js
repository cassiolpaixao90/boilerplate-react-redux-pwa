"use strict";

import express from 'express';

/* eslint-disable no-console */
const app = express();
const http = require("http").Server(app);
// const compiler = webpack(configDev);

// app.use(middleware(webpack(configDev)));
// app.use(middleware(compiler, {
//   noInfo: true,
//   publicPath: configDev.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// });

export default http;



