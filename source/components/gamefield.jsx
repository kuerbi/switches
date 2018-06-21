//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { move, playerWins } from "actions"
import type { AppState } from "reducers"
import type { SwitchesState } from "reducers/switches"
import type  { GameState } from "reducers/game"

type Props = {
  game: GameState,
  switches: any,
  move: (r: number,c: number) => any,
  playerWins: () => any
};
export class GameField extends Component<Props> {
  handlePlayerTurn(r: number,c: number) {
    this.props.move(r,c);
  }

  render() {
    const { switches, game } = this.props;

    let patterns = [];

    for(let r: number = 0; r < switches.length; r++) {
      for(let c: number = 0; c < switches[0].length; c++) {
        patterns.push(
          <div 
            key={"pattern_" + r + c} 
            className={"pattern" + (switches[r][c] == 1 ? " pattern--on":"") + (game == "victory" ? " pattern--victory":"")} 
            onClick={this.handlePlayerTurn.bind(this, r, c)}>
          </div>
        );
      }
    }

    return (
      <div className={"gameField-wrapper"}>
        <div className={"gameField"}>
          {patterns}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: AppState) {
  return {
    game: state.game,
    switches: state.fields.switches
  }
}

function mapDispatchToProps(dispatch) {
  return {
    move: (r,c) => dispatch(move(r,c)),
    playerWins: () => dispatch(playerWins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
