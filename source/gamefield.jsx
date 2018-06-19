//@flow
import React, { Component } from "react"
import { connect } from "react-redux"

type Props = {
  fields: any
};
export class GameField extends Component<Props> {
  onFieldClick(r: number, c: number) {
    console.log("click on field", r, c);
  }

  render() {
    const { fields } = this.props;

    let patterns = [];

    for(let r: number = 0; r < fields.length; r++) {
      for(let c: number = 0; c < fields[0].length; c++) {
        patterns.push(
          <div 
            key={"pattern_" + r + c} 
            className={"pattern" + ((fields[r][c] == 1) ? " pattern--on":"")} 
            onClick={this.onFieldClick.bind(this, r, c)}>
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

function mapStateToProps(state) {
  return {
    // dummy implementation
    fields: [
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]
  }
}

export default connect(mapStateToProps)(GameField);
