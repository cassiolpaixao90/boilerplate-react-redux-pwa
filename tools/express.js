import express                        from "express"
import middleware                     from "./middleware"
import config                         from '../settings/environment/index'
import logger                         from '../utils/logger';
import { appConnect }                 from './tunnel'

const server = express()
const port = config.server.port
let isBuilt = false
middleware(server)
!isBuilt && server.listen(port, (err) => {
      isBuilt = true
      if (err) {
        return logger.error(err.message);
      }
      if(config.envNode === 'production') logger.success(`app started in mode ${config.env}`)
      else appConnect(port)
})

