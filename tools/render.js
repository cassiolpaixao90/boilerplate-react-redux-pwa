import React                from "react"
import { renderToString }   from "react-dom/server"
import { StaticRouter }     from "react-router"
import Routes               from "./components/Routes"
import { flushChunkNames }  from "react-universal-component/server"
import flushChunks          from "webpack-flush-chunks"

export default ({ clientStats }) => (req, res) => {
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  res.send(`
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>React App</title>
        <link rel="manifest" href="./manifest.json">
        ${styles}
      </head>
      <body>
        <div id="react-root">${renderToString(
          <StaticRouter location={req.url} context={{}}>
            <Routes />
          </StaticRouter>
        )}</div>
        ${js}
      </body>
    </html>
  `)
}
