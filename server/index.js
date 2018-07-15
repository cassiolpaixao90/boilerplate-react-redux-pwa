import express                from 'express'
import setting                from '../settings/environment/index'
import setup                  from '../middlewares/indexMiddleware'
import path                   from 'path'
import logger                 from '../tools/logger'
import bodyParser             from "body-parser";
import expressValidator       from "express-validator";
import apiRouteConfig         from "./configuration/apiRouterConfig";
import responseHeaderConfig   from "./configuration/responseHeaderConfig";

const isDev         = setting.envNode === 'development';
const ngrok         = (isDev && setting.envTunel) ? require('ngrok') : false;
const { resolve }   = path;
const app           = express();

//scp
responseHeaderConfig(app);

app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

//configuracao para validacao dos campos
app.use(expressValidator());

//configuracao de rotas
apiRouteConfig(app);

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


//setup webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const port = setting.server.port
const host = setting.server.host


app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }
  if (ngrok) {
    let url;
    try {
      const options = setting.ngrok;
      url = await ngrok.connect(options);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, host, url);
  } else {
    logger.appStarted(port, host);
  }
});
