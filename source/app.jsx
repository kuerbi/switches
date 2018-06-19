import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "reducers"

import Header from "header"
import Footer from "footer"
import GameField from "gamefield"

import { startingPatterns } from "constants/patterns"

const initialState = {
  game: "not_running",
  fields: startingPatterns[0]
}

const store = createStore(
  reducer, 
  initialState,
  applyMiddleware(thunk)
);

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
