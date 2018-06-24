// @flow
import * as React from "react"
import { connect } from "react-redux"
import type { State } from "state/reducers"
import GameBoard from "./gameboard"
import NewGameButton from "./newGameButton"
import Counter from "./counter"
import * as actions from "state/actions"
import { templates } from "tiles"

type Props = {
  gameState: any
}
export class Game extends React.Component<Props> {
  randomLevel(): number {
    return 1 + Math.floor(Math.random() * (templates.length - 1));
  }

  handleClickNewGame = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.props.newGame(this.randomLevel());
  }

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

  renderButtonOrCounter() {
    if(this.props.gameState == "not_running") {
      return <button className="button" onClick={this.handleClickNewGame}>New Game</button>;
    } else {
      return <Counter></Counter>
    }
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
              {this.renderButtonOrCounter()}
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  gameState: state.gameState
})

export default connect(mapStateToProps, actions)(Game);
