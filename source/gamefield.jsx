//@flow
import React, { Component } from "react"
import { connect } from "react-redux"


type Props = {
  fields: any
};
export class GameField extends Component<Props> {
  render() {
    const { fields } = this.props;

    let patterns = [];

    for(let r = 0; r < fields.length; r++) {
      for(let c = 0; c < fields[0].length; c++) {
        patterns.push(<div className={"pattern"}></div>);
      }
    }

    return (
      <div>
        {patterns}
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
