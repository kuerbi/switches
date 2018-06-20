import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "reducers"

import Header from "components/header"
import Footer from "components/footer"
import GameField from "components/gamefield"

import { startingPatterns } from "constants/patterns"

const initialState = {
  game: "not_running",
  fields: {
    patternId: 0,
    switches: startingPatterns[0]
  },
  counter: 0
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
