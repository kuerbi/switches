//@flow
import * as React from "react"
import { connect } from "react-redux"
import type { State } from "state/reducers"
import GameBoard from "./gameboard"
import NewGameButton from "./newGameButton"

type Props = {
  gameState: any
}
export class Game extends React.Component<Props> {
  renderHeader() {
    let headerRight = null;
    if(this.props.gameState == "running") {
      headerRight = (
        <div className="header__right">
          <a href="#" className="link">Abort</a>
        </div>
      );
    }

    return (
      <div className="header">
        <h1 className="header__title title">
          Switches
        </h1>
        {headerRight}
      </div>
    )
  }

  render() {
    return (
      <div className="game">
          {this.renderHeader()}
          <div className="game__main">
            <GameBoard></GameBoard>
          </div>
          <div className="footer">
            <div className="footer__action">
              <button className="button">New Game</button>
            </div>
          </div>
        </div>
    );
  }
}

const mapProps = (state: State) => ({
  gameState: state.gameState
})

export default connect(mapProps)(Game);
