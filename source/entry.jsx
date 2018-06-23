require("index.html")
require("stylesheets/style.scss")

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
