//@flow
import * as React from "react"
import Counter from "./counter"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer, { initialState } from "state/reducers"
import GameBoard from "./gameboard"

type Props = {}
export default class App extends React.Component<Props> {
  render() {
    const store = createStore(reducer, initialState);

    return (
      <Provider store={store}>
        <div class="game">
          <div className="header">
            <h1 className="header__title title">
              Switches
            </h1>
            <div className="header__right">
              <a href="#" className="link">Abort</a>
            </div>
          </div>
          <div className="game__main">
            <GameBoard></GameBoard>
          </div>
          <div className="footer">
            <div className="footer__action">
              <button className="button">New Game</button>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
