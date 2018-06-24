//@flow
import * as React from "react"
import { connect } from "react-redux"
import type { Tiles } from "../tiles"
import type { State } from "state/reducers"
import * as actions from "state/actions"

type Props = {
  rows: number,
  columns: number,
  tiles: Tiles,
  gameState: string
}
export class GameBoard extends React.Component<Props> {
  static defaultProps = {
    rows: 5,
    columns: 5,
    gameState: ""
  }

  handleClickTile = (row: number, column: number, event: any) => {
    if(this.props.gameState === "running") {
      this.props.toggleTile(row, column);
      this.props.incrementCounter();
      this.props.hasWonGame();
    }
  }

  renderTiles() {    
    const { tiles } = this.props;

    let _renderTiles: Array<React.Element<any>> = [];
    let victory = this.props.gameState == "victory" ? "tile--victory":"";
    let tileSwitch;

    for(let row: number = 0; row < tiles.length; row++) {
      for(let column: number = 0; column < tiles[0].length; column++) {
        tileSwitch = tiles[row][column] == 0 ? "tile--off":"tile--on";

        _renderTiles.push(
          <div
            key={"tile#" + row + column}
            className={`gameboard__tile ${tileSwitch} ${victory}`}
            onClick={this.handleClickTile.bind(this, row, column)}
          >
          </div>
        );
      }
    }

    return _renderTiles;
  }

  render() {
    return (
      <div className="gameboard">
        {this.renderTiles()}
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    gameState: state.gameState,
    tiles: state.tiles
  }
}

export default connect(mapStateToProps, actions)(GameBoard);
