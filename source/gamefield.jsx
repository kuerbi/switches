//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { toggleSwitchIfGameIsRunning } from "actions"

// TODO: set props correct
type Props = {
  fields: any,
  toggleSwitch: any
};
export class GameField extends Component<Props> {
  render() {
    const { fields } = this.props;

    let patterns = [];

    for(let r: number = 0; r < fields.length; r++) {
      for(let c: number = 0; c < fields[0].length; c++) {
        patterns.push(
          <div 
            key={"pattern_" + r + c} 
            className={"pattern" + ((fields[r][c] == 1) ? " pattern--on":"")} 
            onClick={this.props.toggleSwitch.bind(this, r, c)}>
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
    fields: state.fields
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSwitch: (r,c) => dispatch(toggleSwitchIfGameIsRunning(r,c))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
