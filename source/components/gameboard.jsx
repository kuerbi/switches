//@flow
import * as React from "react"
import { connect } from "react-redux"
import type { Tiles } from "../tiles"
import type { State } from "state/reducers"

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

  renderTiles() {
    const { tiles } = this.props;

    let _renderTiles: Array<any> = [];

    for(let row: number = 0; row < tiles.length; row++) {
      for(let column: number = 0; column < tiles[0].length; column++) {
        _renderTiles.push(
          <div
            key={"tile#" + row + column}
            className={"gameboard__tile tile"}>
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
    tiles: state.tiles
  }
}

export default connect(mapStateToProps)(GameBoard);
