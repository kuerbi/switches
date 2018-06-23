import React, { Component } from "react"
import { Provider } from "react-redux"
import store from "store"

import Header from "components/header"
import Footer from "components/footer"
import GameField from "components/gamefield"

// @deprecated
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={"game-wrapper"}>
          <div className={"game"}>
            <Header></Header>
            <GameField></GameField>
            <Footer></Footer>
          </div>
        </div>
      </Provider>
    )
  }
}
