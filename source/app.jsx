import React, { Component } from "react"

import Header from "header"
import Footer from "footer"

export default class App extends Component {
  render() {
    return (
      <div class={"game-wrapper"}>
        <div class={"game"}>
          <Header></Header>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
