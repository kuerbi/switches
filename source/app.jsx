import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "reducers"

import Header from "header"
import Footer from "footer"
// todo: import GameField from... when gamefield export the connected component
import { GameField } from "gamefield" 

const initialState = {
  gameState: "not_running"
}

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, initialState)}>
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
