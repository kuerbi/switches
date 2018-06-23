//@flow
import * as React from "react"

type Props = {
  rows: number,
  columns: number
}
export class GameBoard extends React.Component<Props> {
  static defaultProps = {
    rows: 5,
    columns: 5
  }

  render() {
    return (
      <div className="gameboard">
        Game Board
      </div>
    );
  }
}
