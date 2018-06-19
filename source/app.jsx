import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "reducers"

import Header from "header"
import Footer from "footer"
import GameField from "gamefield"

import { startingPatterns } from "constants/patterns"

const initialState = {
  game: "not_running",
  fields: startingPatterns[0]
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
