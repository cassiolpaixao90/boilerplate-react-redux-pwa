import React from "react"
const imagePath = require("../images/link.jpg")
import "../css/About.css"

export default () => (
  <div>
    <div className="profile">
      <img src={imagePath} />
      <h1>About</h1>
      <div
        className="content"
      />
    </div>
  </div>
)
