//@flow
import * as React from "react"
import GameBoard from "./gameboard"

type Props = {

}
export class Game extends React.Component<Props> {
  render() {
    return (
      <div className="game">
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
    );
  }
}

export default Game;
