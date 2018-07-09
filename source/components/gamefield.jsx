//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { move, playerWins } from "actions"
import type { Dispatch } from "redux"
import type { AppState } from "reducers"
import type { SwitchesState, GameState} from "reducers/switches"

type Props = {
  game: GameState,
  switches: any,
  move: (r: number,c: number) => any,
  playerWins: () => any
};
export class GameField extends Component<Props> {
  handlePlayerTurn(r: number,c: number) {
    if(this.props.game == "running")
      this.props.move(r,c);
  }

  // Todo: Extract this method into a functional component when this component gets to big
  renderTile(r: number, c: number, switches: any, game: GameState) {
    return (
      <div
        key={"tile_" + r + c} 
        className={"tile" + (switches[r][c] == 1 ? " tile--turned":"") + (game == "victory" ? " tile--victory":"")} 
        onClick={this.handlePlayerTurn.bind(this, r, c)}>
      </div>
    );
  }

  render() {
    const { switches, game } = this.props;

    let tiles = [];

    for(let r: number = 0; r < switches.length; r++) {
      for(let c: number = 0; c < switches[0].length; c++) {
        tiles.push(this.renderTile(r,c,switches, game));
      }
    }

    return (
      <div className={"gameField-wrapper"}>
        <div className={"gameField"}>
          {tiles}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: AppState) {
  return {
    game: state.fields.game,
    switches: state.fields.switches
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    move: (r,c) => dispatch(move(r,c)),
    playerWins: () => dispatch(playerWins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField)
