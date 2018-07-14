import React from "react"
import ReactDOM from "react-dom"
import AppRoot from "./components/AppRoot"
import { AppContainer } from "react-hot-loader"
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

function render(Component) {
  ReactDOM.render(
    <AppRoot />,
    document.getElementById("react-root")
  )
}
render(AppRoot)

if (module.hot) {
  module.hot.accept("./components/AppRoot.js", () => {
    const NewAppRoot = require("./components/AppRoot").default
    render(NewAppRoot)
  })
}
